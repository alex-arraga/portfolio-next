"use client"

import { CustomButtonProps } from "@/types/cars-store"
import Image from "next/image"

function CustomButton({ title,
    containerStyle,
    textStyle,
    handleClick,
    btnType,
    rightIcon,
    priceId,
    isPayButton,
    urlPayAPI }: CustomButtonProps) {

    return (
        <>
            {
                isPayButton ?
                    <button
                        disabled={false}
                        type={btnType || "button"}
                        className={`custom-btn ${containerStyle}`}
                        onClick={async () => {
                            const res = await fetch(`${urlPayAPI}`, {
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                method: 'POST',
                                body: JSON.stringify({
                                    priceId
                                }),
                            })
                            const data = await res.json()
                            window.location.href = data.url
                        }}
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

                    :

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
            }
        </>
    )
}

export default CustomButton