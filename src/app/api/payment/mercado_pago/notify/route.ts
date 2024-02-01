import { NextResponse, NextRequest } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"
import { settingOrder } from "@/app/utils";
import { MercadoPagoPaymentSchema } from "@/schemas/zod-schemas";
import { BodyWebhookMP } from "@/types/api-types";


export async function POST(request: NextRequest) {
    const client = new MercadoPagoConfig({
        accessToken: process.env.MERCADOPAGO_SECRET_TOKEN!
    });

    try {
        const body = await request.json() as BodyWebhookMP;
        const payment = await new Payment(client).get({ id: body.data.id });

        // Zod
        const check = MercadoPagoPaymentSchema.safeParse(payment)

        if (check.success) {
            const typeService = "mercado_pago"
            const paymentId = payment.id!.toString();
            const installments = payment.installments ?? undefined;
            const fee = payment.fee_details?.[0]?.amount ?? undefined;
            const statusDetail = payment.status_detail ?? undefined;
            const netAmount = payment.transaction_details?.net_received_amount ?? undefined;
            const status = payment.status ?? undefined;
            const orderId = payment.external_reference!;
            const payResource = payment.payment_method?.type ?? undefined;

            // If payment exist update the order
            if (body.data.id === paymentId) {
                settingOrder({ typeService, paymentId, orderId, status, statusDetail, payResource, installments, fee, netAmount })
                return Response.json({ modify_order: true })
            }
        } else {
            console.log(check.error)
        }
    } catch (error) {
        console.log(error)
        return Response.json(error)
    }

    return NextResponse.json({ success: true }, { status: 200 })
}