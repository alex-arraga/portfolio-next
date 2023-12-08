"use client"

import { CustomButtonProps } from "@/types/cars-store"
import { useCarsContext } from "@/context/CarsContext"
import Image from "next/image"

function CustomButton({ title,
    containerStyle,
    textStyle,
    handleClick,
    btnType,
    rightIcon,
    leftIcon,
    priceId,
    preferenceMp,
    isPayButton,
    isResetButton,
    urlPayAPI }: CustomButtonProps) {

    const { resetAllFilters } = useCarsContext()

    // const params = new URLSearchParams(window.location.href)

    // const paramsMp = {
    //     id: params.append('id', `${preferenceMp?.id}`),
    //     title: params.append('id', `${preferenceMp?.title}`),
    //     picture_url: params.append('id', `${preferenceMp?.picture_url}`),
    //     description: params.append('id', `${preferenceMp?.description}`),
    //     quantity: params.append('id', `${preferenceMp?.quantity}`),
    //     unit_price: params.append('id', `${preferenceMp?.unit_price}`)
    // }

    return (
        <>
            {
                isPayButton ?
                    <button
                        disabled={false}
                        type={btnType || "button"}
                        className={`custom-btn ${containerStyle}`}
                        onClick={async () => {

                            if (preferenceMp !== undefined) {
                                try {
                                    console.log(preferenceMp)

                                    await fetch(`${urlPayAPI}`, {
                                        method: 'GET',
                                        // body: JSON.stringify(preferenceMp),
                                        credentials: 'include'
                                    })

                                } catch (error) {
                                    console.log(error)
                                }

                            } else {
                                try {
                                    console.log(priceId)
                                    const res = await fetch(`${urlPayAPI}`, {
                                        method: 'POST',
                                        body: JSON.stringify({ priceId }),
                                        credentials: 'include'
                                    })

                                    const response = await res.json()
                                    window.location.href = response.url
                                } catch (error) {
                                    console.log(error)
                                }
                            }
                        }}
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

                    : isResetButton ?
                        <button
                            disabled={false}
                            type={btnType || "button"}
                            className={`custom-btn ${containerStyle}`}
                            onClick={() => resetAllFilters()}
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

                        :

                        <button
                            disabled={false}
                            type={btnType || "button"}
                            className={`custom-btn ${containerStyle}`}
                            onClick={handleClick}
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
            }
        </>
    )
}

export default CustomButton