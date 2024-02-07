import { NextResponse, NextRequest } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"
import { settingOrder } from "@/app/utils";
import { MercadoPagoPaymentSchema } from "@/schemas/zod-schemas";
import { BodyWebhookMP } from "@/types/api-types";
import { sendMessage } from "@/app/utils/sendMessage";


export async function POST(request: NextRequest) {
    try {
        const client = new MercadoPagoConfig({
            accessToken: process.env.MERCADOPAGO_SECRET_TOKEN!,
            options: { timeout: 5000 }
        });

        const body = await request.json() as BodyWebhookMP;
        const webhookId = body.data.id;
        const payment = await new Payment(client).get({ id: webhookId });

        if (payment && payment.id?.toString() === webhookId) {
            // Zod validation
            const check = MercadoPagoPaymentSchema.safeParse(payment)

            if (check.success) {
                const typeService = "mercado_pago"
                const paymentId = payment.id?.toString();
                const installments = payment.installments ?? undefined;
                const fee = payment.fee_details?.[0]?.amount ?? undefined;
                const statusDetail = payment.status_detail ?? undefined;
                const netAmount = payment.transaction_details?.net_received_amount ?? undefined;
                const status = payment.status ?? undefined;
                const orderId = payment.external_reference!;
                const payResource = payment.payment_method?.type ?? undefined;

                // If payment exist update the order
                await settingOrder({ typeService, paymentId, orderId, status, statusDetail, payResource, installments, fee, netAmount })
                return NextResponse.json({ success: true }, { status: 200 })

            } else {
                console.log(check.error)
                await sendMessage(`Error check in MP Notify: ${check.error.message}`)
            }
        } else {
            throw new Error('Payment not exist')
        }

    } catch (error) {
        console.log(error)
        await sendMessage(`Error in Mercado Pago notify, ${error}`)
        return NextResponse.json({ message: "Error in Mercado Pago Notify", error: error }, { status: 500 })
    }
}