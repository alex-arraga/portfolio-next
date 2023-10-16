import React, { Key } from "react"
import { PropsCard } from "@/interfaces/tasks"

export function Card({ children, className, key, onClick }: PropsCard): React.ReactElement {
    return (
        <React.Fragment>
            <div className={`${className}`} key={key} onClick={onClick} >
                {children}
            </div>
        </React.Fragment >
    )
}

export default Card