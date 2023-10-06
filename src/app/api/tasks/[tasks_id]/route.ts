import { NextResponse } from 'next/server';

interface Params {
    params: { tasks_id: string }
}

export function GET(request: Request, { params }: Params) {
    return NextResponse.json({
        message: 'Tarea especifica numero: ' + params.tasks_id
    })
}

export function PUT(request: Request, { params }: Params) {
    return NextResponse.json({
        message: 'Actualizando la tarea ' + params.tasks_id
    })
}

export function DELETE(request: Request, { params }: Params) {
    return NextResponse.json({
        message: 'Tarea numero ' + params.tasks_id + ' eliminada con exito'
    })
}