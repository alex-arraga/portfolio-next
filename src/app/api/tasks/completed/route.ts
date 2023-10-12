import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const getAllCompletedTasks = await prisma.taskCompleted.findMany()
    return NextResponse.json({
        message: 'Tareas completadas obtenidas con exito',
        getAllCompletedTasks
    })
}

export async function POST(request: Request) {
    const data = await request.json()

    const createCompletedTasks = await prisma.taskCompleted.create({ data })
    return NextResponse.json({
        message: 'Tarea completada creada con exito',
        createCompletedTasks
    })
}