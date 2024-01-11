// Type Tasks
export interface TasksParams {
    params: { tasks_id: string }
}

// Type Calculator
export interface CalculatorParams {
    params: { calc_id: string }
}

// Type Cars
export interface CarsParams {
    params: { id: string }
}

export interface OrderParams {
    params: { order_id: string }
}

export interface BodyPreferenceMp {
    order_id: string,
    car_description: string,
    quantity: number,
    unit_price: number
}

export interface BodyPayloadStripe {
    order_id: string,
    price_id: string
}