import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

// Get: all operations
export async function GET(request: Request) {
    try {
        const getAllOperations = await prisma.calculator.findMany()
        return NextResponse.json({ getAllOperations })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}

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

// Delete: all operations
export async function DELETE(request: Request) {
    try {
        await prisma.calculator.deleteMany()
        return NextResponse.json({
            message: 'Todas las operaciones han sido eliminadas'
        })

    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}