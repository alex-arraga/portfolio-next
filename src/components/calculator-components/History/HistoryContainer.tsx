"use client"

import '@/css/history-scrollbar.css'
import '@/css/transition.css'
import { HiMenuAlt1 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import { CSSTransition } from 'react-transition-group'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { baseURL } from '@/libs/baseURL'


function HistoryContainer({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false)
    const router = useRouter()
    const date = new Date().toLocaleDateString()
    const nodeRef = useRef<HTMLDivElement | null>(null);

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
        <div className='relative left-0 top-0 h-screen sm:w-full sm:px-3'>
            <HiMenuAlt1 onClick={() => setIsVisible(true)} className={`absolute left-3 top-3 h-7 w-7 cursor-pointer ${isVisible === true ? 'hidden' : 'block'}`} />

            {/* Contenedor completo */}
            <CSSTransition classNames='fade'
                key={'HistoryRegister'}
                in={isVisible}
                timeout={1000}
                nodeRef={nodeRef}
                onExited={() => {
                    if (nodeRef.current) {
                        nodeRef.current.style.opacity = '0'
                    }
                }}>

                <div ref={nodeRef} className={`scroll h-full absolute overflow-auto text-start left-0 top-0 bg-black w-full border-opacity-30 border-sky-200 border-r-2 px-5 ${isVisible == false ? 'hidden' : 'block'}`} >

                    <div className='bg-black sticky top-0'>

                        <CgClose onClick={() => setIsVisible(false)} className={`absolute left-0 rounded-full hover:text-pink-400 cursor-pointer text-xl duration-200 text-white ${isVisible == false ? 'hidden' : 'block'}`} />

                        <h2 className='flex justify-center mt-5 text-base md:text-xl py-5 font-semibold text-sky-100 select-none'>Historial de Operaciones</h2>

                        <button onClick={() => deleteAllOperations()}
                            className='flex justify-center w-full py-1.5 rounded-xl sticky cursor-pointer mb-5 bg-slate-800 hover:bg-slate-700 duration-300 select-none'>Borrar Historial</button>

                        <hr className='mb-5 opacity-50' />

                        <h3 className='flex w-full justify-center items-center pb-5 text-sm opacity-50'>{date}</h3>
                    </div>
                    {children}
                </div>
            </CSSTransition >
        </div>
    )
}

export default HistoryContainer