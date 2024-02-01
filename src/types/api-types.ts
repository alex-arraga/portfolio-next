// Type Tasks
export type TasksParams = {
    params: { tasks_id: string }
}

// Type Calculator
export type CalculatorParams = {
    params: { calc_id: string }
}

// Type Cars
export type CarsParams = {
    params: { id: string }
}

export type OrderParams = {
    params: { order_id: string }
}

export type BodyWebhookMP = {
    action: string,
    api_version: string,
    data: { id: string },
    date_created: string,
    id: number,
    live_mode: boolean,
    type: string,
    user_id: string
}

export type BodyPreferenceMp = {
    order_id: string,
    car_description: string,
    quantity: number,
    unit_price: number
}

export type BodyPayloadStripe = {
    order_id: string,
    price_id: string
}