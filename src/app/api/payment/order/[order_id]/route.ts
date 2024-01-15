import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { OrderParams } from "@/types/api";

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
            return NextResponse.json({ Error_Message: error })
        }
    } else {
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
            return NextResponse.json({ Error_Message: error })
        }
    } else {
        return NextResponse.json({ Error_Message: 'Params not exist' })
    }
}