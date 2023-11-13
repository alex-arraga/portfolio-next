import { Cars } from "@prisma/client"

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
    params: { cars_id: string }
}