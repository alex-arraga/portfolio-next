import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'
import { sendMessage } from '@/app/utils/sendMessage'

export async function GET(request: Request) {
    const id_clerk = request.url.split('/')[5]
    try {
        const getUser = await prisma.user.findFirst({
            where: {
                id_clerk: id_clerk
            }
        })
        if (getUser === undefined || null) {
            return NextResponse.json({ message: "User don't exist" })
        }
        return NextResponse.json(getUser)
    } catch (error) {
        await sendMessage(`User API Error 🔴 - Route: create_user[user_id], Method: GET - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}
