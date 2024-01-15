import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(request: Request) {
    try {
        const data = await request.json()
        await prisma.order.create({ data })

        return NextResponse.json({ status: 200, message: 'Order created' })
    } catch (error) {
        return NextResponse.json({ Error_Message: error })
    }
}

export async function GET(request: Request) {
    try {
        const getAllOrders = await prisma.order.findMany()

        return NextResponse.json({ status: 200, getAllOrders })
    } catch (error) {
        return NextResponse.json({ Error_Message: error })
    }
}

export async function DELETE(request: Request) {
    try {
        await prisma.order.deleteMany()
        return NextResponse.json({ status: 200, message: 'All orders deleted' })
    } catch (error) {
        return NextResponse.json({ Error_Message: error })
    }
}