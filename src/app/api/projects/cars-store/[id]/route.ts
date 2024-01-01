import { prisma } from "@/libs/prisma";
import { OrderParams } from "@/types/api";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: OrderParams) {
    try {
        const infoCar = await prisma.cars.findFirst({
            where: {
                order_id: params.order_id
            }
        })
        return NextResponse.json({ infoCar })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}

export async function PUT(request: Request, { params }: OrderParams) {
    try {
        const data = await request.json()
        const updateCar = await prisma.cars.update({
            where: {
                order_id: params.order_id
            }, data
        })
        return NextResponse.json({ updateCar })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}

export async function DELETE(request: Request, { params }: OrderParams) {
    try {
        await prisma.cars.delete({
            where: {
                order_id: params.order_id
            }
        })
        return NextResponse.json({ Message: `Car with order_id: ${params.order_id} deleted` })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}