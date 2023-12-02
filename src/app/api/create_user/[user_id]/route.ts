import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export async function GET(request: Request) {
    const id_clerk = request.url.split('/')[5]
    console.log(id_clerk)
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
        return NextResponse.json({
            Error_Message: error
        })
    }
}
