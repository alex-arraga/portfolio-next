import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: 'Todas las tareas'
    })
}

export function POST() {
    return NextResponse.json({
        message: 'Creando tarea'
    })
}