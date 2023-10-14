import { prisma } from '@/libs/prisma'
import { Params } from '../../[tasks_id]/route'
import { NextResponse } from 'next/server'

export const DELETE = async (request: Request, { params }: Params) => {
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