"use client"

import { BoxProps } from '@/types/home-types'

export const Box = ({ children, className }: BoxProps) => {
    return (
        <div className={className}>
            {
                children
            }
        </div>
    )
}
