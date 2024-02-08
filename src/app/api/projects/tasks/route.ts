import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma'
import { sendMessage } from '@/app/utils/sendMessage';

// Get All Task
export async function GET() {
    try {
        const getAllTasks = await prisma.task.findMany()
        return NextResponse.json(getAllTasks)
    } catch (error) {
        await sendMessage(`Tasks API Error 🔴 - Route: tasks.route, Method: GET - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}

// Create New Task
export async function POST(request: Request) {
    try {
        const data = await request.json()
        const createTask = await prisma.task.create({ data })

        return NextResponse.json({
            message: 'Tarea creada exitosamente',
            createTask
        })
    } catch (error) {
        await sendMessage(`Tasks API Error 🔴 - Route: tasks.route, Method: POST - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}