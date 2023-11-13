import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const getAllCars = await prisma.cars.findMany()
        return NextResponse.json({ getAllCars })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const newCarRented = await prisma.cars.create({ data })
        return NextResponse.json({ newCarRented })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}

export async function DELETE(request: Request) {
    try {
        await prisma.cars.deleteMany()
        return NextResponse.json({ Message: 'All cars deleted' })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}