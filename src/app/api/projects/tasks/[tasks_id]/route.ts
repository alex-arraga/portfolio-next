import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
import { TasksParams } from '@/types/api-types';
import { sendMessage } from '@/app/utils/sendMessage';


// Get a Task
export async function GET(request: Request, { params }: TasksParams) {
    try {
        const getTask = await prisma.task.findFirst({
            where: {
                id: Number(params.tasks_id)
            }
        })
        if (getTask === undefined || null) {
            return NextResponse.json({ message: 'No se encontró la tarea' })
        }
        return NextResponse.json(getTask)

    } catch (error) {
        await sendMessage(`Tasks API Error 🔴 - Route: tasks[tasks_id], Method: GET - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}

// Update Task
export async function PUT(request: Request, { params }: TasksParams) {
    try {
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

    } catch (error) {
        await sendMessage(`Tasks API Error 🔴 - Route: tasks[tasks_id], Method: PUT - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}

// Delete Task
export async function DELETE(request: Request, { params }: TasksParams) {
    try {
        await prisma.task.delete({
            where: {
                id: Number(params.tasks_id)
            }
        })
        return NextResponse.json({
            message: 'Tarea numero ' + params.tasks_id + ' eliminada con exito'
        })

    } catch (error) {
        await sendMessage(`Tasks API Error 🔴 - Route: tasks[tasks_id], Method: DELETE - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}