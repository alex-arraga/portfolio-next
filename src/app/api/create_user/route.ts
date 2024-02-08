import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'
import { sendMessage } from '@/app/utils/sendMessage'

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const user = await prisma.user.create({ data })

        return NextResponse.json({ status: 200, user })
    } catch (error) {
        await sendMessage(`User API Error 🔴 - Route: create_user.route, Method: POST - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}

export async function GET(request: Request) {
    try {
        const getAllUsers = await prisma.user.findMany()
        return NextResponse.json({ status: 200, getAllUsers })
    } catch (error) {
        await sendMessage(`User API Error 🔴 - Route: create_user.route, Method: GET - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}

export async function DELETE(request: Request) {
    try {
        await prisma.user.deleteMany()
        return NextResponse.json({ status: 200, message: 'All users deleted' })
    } catch (error) {
        await sendMessage(`User API Error 🔴 - Route: create_user.route, Method: DELETE - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}
