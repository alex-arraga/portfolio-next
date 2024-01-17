"use client"

import { toast } from 'sonner';

export function confirmToast(message: string) {
    return new Promise<boolean>((resolve) => {
        toast(
            <div className='flex flex-col justify-center m-2 gap-6 w-full h-full'>
                <p className='text-sm text-center text-white font-medium w-full px-4'>{message}</p>
                <div className='flex gap-2 h-fit'>
                    <button
                        className='bg-emerald-100 hover:bg-emerald-400 active:bg-emerald-400 w-full h-fit rounded-md py-2 text-sm font-medium'
                        onClick={() => {
                            resolve(true)
                            toast.dismiss()
                        }}>
                        Confirmar
                    </button>
                    <button
                        className='bg-pink-100 hover:bg-pink-400 active:bg-pink-400 w-full h-fit rounded-md py-2 text-sm font-medium'
                        onClick={() => {
                            resolve(false)
                            toast.dismiss()
                        }}>
                        Cancelar
                    </button>
                </div>
            </div>,
            {
                position: 'top-center',
                style: {
                    backgroundColor: '#303030',
                    borderColor: '#F0B4FF'
                },
            }
        )
    })
}