"use client"

import { baseURL } from '@/libs/baseURL'
import { useRouter } from 'next/navigation'
import React from 'react'

export function HeaderHistory() {
    const date = new Date().toLocaleDateString()
    const router = useRouter()

    const deleteAllOperations = async () => {
        try {
            await fetch(`${baseURL}/calculator`, {
                method: 'DELETE',
                credentials: 'include'
            })
            router.refresh()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2 className='flex justify-center text-xl mb-5 font-semibold text-sky-100'>Historial de Operaciones</h2>
            <button onClick={() => deleteAllOperations()}
                className='flex justify-center w-full py-1.5 rounded-xl sticky cursor-pointer mb-5 bg-slate-800'>Borrar Historial</button>
            <hr className='mb-5 opacity-50' />

            <h3 className='flex w-full justify-center items-center mb-5 text-sm opacity-50'>{date}</h3>
        </div>
    )
}

export default HeaderHistory