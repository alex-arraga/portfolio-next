import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

// Post: new operation
export async function POST(request: Request) {
    try {
        const data = await request.json()
        const newOperation = await prisma.calculator.create({ data })

        return NextResponse.json({
            newOperation
        })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}