import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

// Type
interface Params {
    params: { tasks_id: string }
}

// Get a Task
export async function GET(request: Request, { params }: Params) {
    const getTask = await prisma.task.findFirst({
        where: {
            id: Number(params.tasks_id)
        }
    })

    if (getTask === null) {
        return NextResponse.json({ message: 'No se encontró la tarea' })
    }

    return NextResponse.json(getTask)
}

// Update Task
export async function PUT(request: Request, { params }: Params) {
    const data = await request.json()
    const udpateTask = await prisma.task.update({
        where: {
            id: Number(params.tasks_id)
        },
        data
    })

    return NextResponse.json({
        message: 'Tarea actualizada con exito',
        udpateTask
    })
}

// Delete Task
export async function DELETE(request: Request, { params }: Params) {
    const deleteTask = await prisma.task.delete({
        where: {
            id: Number(params.tasks_id)
        }
    })

    return NextResponse.json({
        message: 'Tarea numero ' + params.tasks_id + ' eliminada con exito'
    })
}