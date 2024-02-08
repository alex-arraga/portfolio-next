import { NextResponse, NextRequest } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"
import { settingOrder } from "@/app/utils";
import { MercadoPagoPaymentSchema } from "@/schemas/zod-schemas";
import { WebhookMP } from "@/types/api-types";
import { sendMessage } from "@/app/utils/sendMessage";


export async function POST(request: NextRequest) {
    try {
        const client = new MercadoPagoConfig({
            accessToken: process.env.MERCADOPAGO_SECRET_TOKEN!,
            options: { timeout: 5000 }
        });

        const body = await request.json() as WebhookMP;

        if ("data" in body && body.data.id) {
            await sendMessage('Mercado Pago Notify: Payment information received 🟢')
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
                    await sendMessage('Mercado Pago Notify: Updating Order 🟢')
                    await settingOrder({ typeService, paymentId, orderId, status, statusDetail, payResource, installments, fee, netAmount })
                    return NextResponse.json({ success: true }, { status: 200 })

                } else {
                    console.error(check.error)
                    await sendMessage(`Mercado Pago Notify: Error Zod Check 🔴 ${check.error.message}`)
                }
            } else {
                throw new Error('Payment not exist')
            }
        } else {
            await sendMessage('⚠️ Payment information awaited')
            return NextResponse.json({}, {status: 200})
        }

    } catch (error) {
        console.error(error)
        await sendMessage(`Mercado Pago Notify: Error 🔴 ${error}`)
        return NextResponse.json({ message: "Mercado Pago Notify: Error", error: error }, { status: 500 })
    }
}