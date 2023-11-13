import { prisma } from "@/libs/prisma";
import { CarsParams } from "@/types/api";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: CarsParams) {
    try {
        const getCar = await prisma.cars.findFirst({
            where: {
                id: parseInt(params.cars_id)
            }
        })
        return NextResponse.json({ getCar })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}

export async function PUT(request: Request, { params }: CarsParams) {
    try {
        const data = await request.json()
        const updateCar = await prisma.cars.update({
            where: {
                id: parseInt(params.cars_id)
            }, data
        })
        return NextResponse.json({ updateCar })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}

export async function DELETE(request: Request, { params }: CarsParams) {
    try {
        await prisma.cars.delete({
            where: {
                id: parseInt(params.cars_id)
            }
        })
        return NextResponse.json({ Message: `Car n°: ${params.cars_id} deleted` })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}