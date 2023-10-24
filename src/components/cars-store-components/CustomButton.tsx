"use client"

import { CustomButtonProps } from "@/interfaces/cars-store"

function CustomButton({ title, containerStyle, handleClick }: CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyle}`}
            onClick={() => { }}
        >
            <span className="flex-1">
                {title}
            </span>
        </button>
    )
}

export default CustomButton