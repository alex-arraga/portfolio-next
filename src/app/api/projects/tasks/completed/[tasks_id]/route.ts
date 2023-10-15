import { prisma } from '@/libs/prisma'
import { TasksParams } from '@/interfaces/api'
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
        return NextResponse.json({
            Error_Message: error
        })
    }
}