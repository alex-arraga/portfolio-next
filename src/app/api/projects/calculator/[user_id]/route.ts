import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"


// Get: all operations
export async function GET(request: Request) {
    const userId = parseInt(request.url.split('/')[6])
    try {
        const getAllOperations = await prisma.calculator.findMany({
            where: {
                user_id: userId
            }
        })
        return NextResponse.json({ getAllOperations })
    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}


// Delete: all operations
export async function DELETE(request: Request) {
    const userId = parseInt(request.url.split('/')[6])
    console.log('🎇', userId)
    try {
        await prisma.calculator.deleteMany({
            where: {
                user_id: userId
            }
        })
        return NextResponse.json({
            message: `All operations of user number ${userId}`
        })

    } catch (error) {
        return NextResponse.json({
            Error_Message: error
        })
    }
}