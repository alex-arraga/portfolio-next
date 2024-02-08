import { sendMessage } from "@/app/utils/sendMessage";
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const getAllCars = await prisma.cars.findMany()
        return NextResponse.json({ status: 200, getAllCars })
    } catch (error) {
        await sendMessage(`Cars-Store API Error 🔴 - Route: cars-store.route, Method: GET - ${error}`)
        return NextResponse.json({ Error_Message: error })
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json()
        await prisma.cars.create({ data })
        return NextResponse.json({ status: 200, message: 'Car created' })
    } catch (error) {
        await sendMessage(`Cars-Store API Error 🔴 - Route: cars-store.route, Method: POST - ${error}`)
        return NextResponse.json({ Error_Message: error })
    }
}

export async function DELETE(request: Request) {
    try {
        await prisma.cars.deleteMany()
        return NextResponse.json({ status: 200, message: 'All cars deleted' })
    } catch (error) {
        await sendMessage(`Cars-Store API Error 🔴 - Route: cars-store.route, Method: DELETE - ${error}`)
        return NextResponse.json({ Error_Message: error })
    }
}