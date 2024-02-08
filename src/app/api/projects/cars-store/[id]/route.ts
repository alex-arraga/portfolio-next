import { sendMessage } from "@/app/utils/sendMessage";
import { prisma } from "@/libs/prisma";
import { CarsParams } from "@/types/api-types";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: CarsParams) {
    const { id } = params

    try {
        const infoCar = await prisma.cars.findFirst({
            where: {
                car_id: id
            }
        })

        return NextResponse.json({ status: 200, infoCar })
    }
    catch (error) {
        await sendMessage(`Cars-Store API Error 🔴 - Route: cars-store[id], Method: GET - ${error}`)
        return NextResponse.json({ Error_Message: error })
    }
}

export async function PUT(request: Request, { params }: CarsParams) {
    const { id } = params
    const data = await request.json()

    try {
        const updateCar = await prisma.cars.update({
            where: {
                car_id: id
            }, data
        })
        return NextResponse.json({ updateCar })
    } catch (error) {
        await sendMessage(`Cars-Store API Error 🔴 - Route: cars-store[id], Method: PUT - ${error}`)
        return NextResponse.json({ Error_Message: error })
    }
}


export async function DELETE(request: Request, { params }: CarsParams) {
    const { id } = params

    try {
        await prisma.cars.delete({
            where: {
                car_id: id
            }
        })

        return NextResponse.json({ status: 200, message: 'Car deleted' })
    } catch (error) {
        await sendMessage(`Cars-Store API Error 🔴 - Route: cars-store[id], Method: DELETE - ${error}`)
        return NextResponse.json({ Error_Message: error })
    }
}