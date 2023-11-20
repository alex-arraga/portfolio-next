"use client"

import { BoxProps } from '@/types/home'

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={className}>
      {
        children
      }
    </div>
  )
}
