"use client"

import { CustomButtonProps } from "@/interfaces/cars-store"

function CustomButton({ title, containerStyle, handleClick, btnType }: CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
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