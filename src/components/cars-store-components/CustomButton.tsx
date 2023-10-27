"use client"

import { CustomButtonProps } from "@/types/cars-store"
import Image from "next/image"

function CustomButton({ title, containerStyle, textStyle, handleClick, btnType, rightIcon }: CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyle}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    )
}

export default CustomButton