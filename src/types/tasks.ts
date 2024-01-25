import { Task } from "@prisma/client"
import React from "react"

export type PropsTaskCard = {
    task: Task
    typePage?: string
}

export type PropsCard = {
    children: React.ReactNode,
    className: string,
    onClick?: (() => void)
}