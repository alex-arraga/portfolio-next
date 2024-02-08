import { sendMessage } from "@/app/utils/sendMessage";
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const getAllCompletedTasks = await prisma.taskCompleted.findMany()
        return NextResponse.json({
            message: 'Tareas completadas obtenidas con exito',
            getAllCompletedTasks
        })
    } catch (error) {
        await sendMessage(`Tasks API Error 🔴 - Route: tasks_completed, Method: GET - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json()

        const createCompletedTasks = await prisma.taskCompleted.create({ data })
        return NextResponse.json({
            message: 'Tarea completada creada con exito',
            createCompletedTasks
        })
    } catch (error) {
        await sendMessage(`Tasks API Error 🔴 - Route: tasks_completed, Method: POST - ${error}`)
        return NextResponse.json({
            Error_Message: error
        })
    }
}

