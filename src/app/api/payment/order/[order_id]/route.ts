import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { OrderParams } from "@/types/api-types";
import { sendMessage } from "@/app/utils/sendMessage";

export async function GET(request: Request, { params }: OrderParams) {
    if (params.order_id) {
        try {
            const infoOrder = await prisma.order.findFirst({
                where: {
                    order_id: params.order_id
                }
            })

            return NextResponse.json({ status: 200, message: 'Order found', infoOrder })
        } catch (error) {
            await sendMessage(`Order API Error 🔴 - Route: [order_id], Method: GET - ${error}`)
            return NextResponse.json({ Error_Message: error })
        }
    } else {
        await sendMessage('Order API Error 🔴 - Params not exist')
        return NextResponse.json({ Error_Message: 'Params not exist' })
    }

}

export async function PUT(request: Request, { params }: OrderParams) {
    try {
        const data = await request.json()
        const updateOrder = await prisma.order.update({
            where: {
                order_id: params.order_id
            },
            data
        })

        return NextResponse.json({ status: 200, message: 'Order update', updateOrder })
    } catch (error) {
        await sendMessage(`Order API Error 🔴 - Route: [order_id], Method: PUT - ${error}`)
        return NextResponse.json({ Error_Message: error })
    }
}

export async function DELETE(request: Request, { params }: OrderParams) {
    if (params.order_id) {
        try {
            await prisma.order.delete({
                where: {
                    order_id: params.order_id
                }
            })

            return NextResponse.json({ status: 200, message: 'Order deleted' })
        } catch (error) {
            await sendMessage(`Order API Error 🔴 - Route: [order_id], Method: DELETE - ${error}`)
            return NextResponse.json({ Error_Message: error })
        }
    } else {
        await sendMessage('Order API Error 🔴 - Params not exist')
        return NextResponse.json({ Error_Message: 'Params not exist' })
    }
}