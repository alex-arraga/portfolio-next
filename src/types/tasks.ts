import { Task } from "@prisma/client"
import React from "react"

export interface PropsTaskCard {
    task: Task
    typePage?: string
}

export interface PropsCard {
    children: React.ReactNode,
    className: string,
    onClick?: (() => void)
}