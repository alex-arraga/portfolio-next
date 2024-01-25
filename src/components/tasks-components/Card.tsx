import React from "react"
import { PropsCard } from "@/types/tasks-types"

export function Card({ children, className, onClick }: PropsCard): React.ReactElement {
    return (
        <React.Fragment>
            <div className={`${className}`} onClick={onClick} >
                {children}
            </div>
        </React.Fragment >
    )
}

export default Card