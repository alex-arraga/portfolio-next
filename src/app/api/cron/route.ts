import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const timeNow = Date.now();
    const fiveMinutesAgo = new Date(timeNow - (1000 * 60 * 5));

    // I get orders whose status is pending and have been created more than 5 minutes ago
    try {
        const allOrders = await prisma.order.findMany({
            where: {
                pay_status: 'pending',
                created_at: {
                    lt: fiveMinutesAgo
                }
            }
        });

        // Continue if there are "pending" and old orders
        if (allOrders.length >= 1) {
            const ordersIds = allOrders.map((order) => order.order_id)

            // The pending orders will be deleted together with the corresponding car created.
            for (let orderId of ordersIds) {
                await prisma.cars.deleteMany({
                    where: {
                        liked: false,
                        order_id: orderId
                    }
                })

                await prisma.order.deleteMany({
                    where: {
                        order_id: orderId
                    }
                })
            }


            return NextResponse.json({ status: 200, message: 'All pending orders and cars deleted' })
        } else {
            return NextResponse.json({ status: 200, message: 'Dont have orders to be delete' })
        }
    } catch (error) {
        return NextResponse.json({ status: 500, Error_Message: error })
    }
}