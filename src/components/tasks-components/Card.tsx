import React, { Key } from "react"

interface PropsCard {
    children: React.ReactNode,
    className: string,
    key: Key,
    onClick?: (() => void)
}

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