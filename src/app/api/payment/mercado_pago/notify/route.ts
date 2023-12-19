import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const viewURL = request.text()
    console.log(viewURL)

    return NextResponse.json({ m: 'Llego MP' })
}

