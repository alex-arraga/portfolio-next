"use client"

import '@/css/history-scrollbar.css'
import '@/css/transition.css'
import { CSSTransition } from 'react-transition-group'

import { useRef } from 'react'
import { useCalculatorContext } from '@/context/CalculatorContext'
import Image from 'next/image'


function HistoryContainer({ children }: { children: React.ReactNode }) {
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const { deleteAllOperations, modalIsVisible, setModalIsVisible } = useCalculatorContext()


    return (
        <>
            {/* Contenedor completo */}
            <CSSTransition classNames='fade'
                key={'register'}
                in={modalIsVisible}
                timeout={500}
                nodeRef={nodeRef}
                onEnter={() => setModalIsVisible(true)}
                onExited={() => setModalIsVisible(false)}>

                <div className={`relative ${modalIsVisible ? 'z-20 w-screen' : 'z-0'} left-0 top-0 h-screen w-full px-3`}>
                    <Image
                        src={'/burger-menu.svg'}
                        alt='burger menu'
                        width={28}
                        height={28}
                        onClick={() => setModalIsVisible(true)}
                        className={`absolute z-10 left-3 top-3 p-2 h-9 w-9 sm:h-10 sm:w-10 cursor-pointer ${modalIsVisible ? 'hidden' : 'block'}`}
                    />

                    {/* If modal is visible */}
                    <div ref={nodeRef} className={`scroll h-full absolute overflow-auto text-start left-0 top-0 bg-black w-full border-opacity-30 border-sky-200 border-r-2 px-5 ${modalIsVisible == false ? 'hidden' : 'block'}`} >
                        <div className='bg-black sticky top-0'>
                            <Image
                                src={'/cross-close.svg'}
                                alt='cross'
                                width={24}
                                height={24}
                                onClick={() => setModalIsVisible(false)}
                                className={`absolute left-0 rounded-full p-1 hover:bg-red-500 hover:bg-opacity-70 cursor-pointer duration-200 ${modalIsVisible == false ? 'hidden' : 'block'}`}
                            />

                            <h2 className='flex justify-center mt-5 text-base md:text-xl py-5 font-semibold text-sky-100 select-none'>Historial de Operaciones</h2>
                            <button onClick={() => deleteAllOperations()}
                                className='flex justify-center w-full py-1.5 rounded-xl sticky cursor-pointer mb-5 bg-pink-600 bg-opacity-50 hover:bg-pink-700 duration-300 select-none'>Borrar Historial</button>
                            <hr className='mb-5 opacity-50' />
                        </div>

                        {children}
                    </div>
                </div >
            </CSSTransition >
        </>
    )
}

export default HistoryContainer