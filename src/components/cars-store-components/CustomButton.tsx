"use client"

import { deleteAllParams } from "@/app/utils";
import { CustomButtonProps } from "@/types/cars-store-types"
import Image from "next/image"

function CustomButton({ title,
    containerStyle,
    textStyle,
    handleClick,
    totalCustom,
    btnType,
    rightIcon,
    leftIcon,
    isResetButton }: CustomButtonProps) {

    return (
        <>
            <button
                disabled={false}
                type={btnType || "button"}
                className={totalCustom ? containerStyle : `custom-btn ${containerStyle}`}
                onClick={!isResetButton ? handleClick : () => deleteAllParams()}
            >
                {leftIcon && (
                    <div className="relative w-6 h-6">
                        <Image
                            src={leftIcon}
                            alt="right icon"
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
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
        </>
    )
}

export default CustomButton