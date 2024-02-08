import { CalculatorParams } from "@/types/api-types";
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";
import { sendMessage } from "@/app/utils/sendMessage";

// Get: specific operation
export async function GET(request: Request, { params }: CalculatorParams) {
    try {
        const getOperation = await prisma.calculator.findFirst({
            where: {
                id: Number(params.calc_id)
            }
        })
        return NextResponse.json({
            getOperation
        })

    } catch (error) {
        await sendMessage(`Calculator API Error 🔴 - Route: calculator_calcs[user_id], Method: GET - ${error}`)
        return NextResponse.json({
            Error_Messagge: error
        })
    }
}

// Delete: specific operation
export async function DELETE(request: Request, { params }: CalculatorParams) {
    try {
        await prisma.calculator.delete({
            where: {
                id: Number(params.calc_id)
            }
        })

        return NextResponse.json({
            message: `Operación numero ${params.calc_id} eliminada con éxito`
        })
    } catch (error) {
        await sendMessage(`Calculator API Error 🔴 - Route: calculator_calcs[user_id], Method: DELETE - ${error}`)
        return NextResponse.json({
            Error_Messagge: error
        })
    }
}