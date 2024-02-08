import { sendMessage } from '@/app/utils/sendMessage'
import { prisma } from '@/libs/prisma'
import { TasksParams } from '@/types/api-types'
import { NextResponse } from 'next/server'

export const DELETE = async (request: Request, { params }: TasksParams) => {
    try {
        await prisma.taskCompleted.delete({
            where: {
                id: Number(params.tasks_id)
            }
        })
        return NextResponse.json({
            message: `Tarea completada numero: ${params.tasks_id} con exito`
        })

    } catch (error) {
        await sendMessage(`Tasks API Error 🔴 - Route: tasks_completed[tasks_id], Method: DELETE - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}