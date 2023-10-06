import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma'

// Get All Task
export async function GET() {
    const getAllTasks = await prisma.task.findMany()
    return NextResponse.json({
        message: 'Todas las tareas',
        getAllTasks
    })
}

// Create New Task
export async function POST(request: Request) {
    const data = await request.json()
    const createTask = await prisma.task.create({ data })

    return NextResponse.json({
        message: 'Tarea creada',
        createTask
    })
}