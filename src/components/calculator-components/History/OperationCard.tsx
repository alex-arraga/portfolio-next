"use client"

import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import '@/css/transition.css'
import { useEffect, useRef, useState } from 'react'

import { Operation } from '@/types/calculator'
import { useCalculatorContext } from '@/context/CalculatorContext';


export function OperationCard({ operation }: { operation: Operation }) {
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
    const nodeRef = useRef(null);
    const { deleteOperation, getExpression, getResult } = useCalculatorContext()

    useEffect(() => {
        setIsAnimationEnabled(true);
    }, []);


    return (
        <CSSTransition classNames='fade'
            key={operation.id}
            in={isAnimationEnabled}
            timeout={1000}
            nodeRef={nodeRef}>

            <div ref={nodeRef} key={operation.id} className='bg-sky-800 w-full h-28 rounded-md p-3 mb-5'>
                <div className='flex justify-between items-center'>
                    <p className='text-xs text-gray-200'>{operation.created_at.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <div className='h-3.5 w-3.5 sm:h-4 sm:w-4 relative flex cursor-pointer justify-center items-center rounded-full bg-transparent hover:bg-red-400 duration-100'>
                        <Image
                            src={'/cross-close-rounded.svg'}
                            alt='cross close'
                            fill
                            sizes='20px'
                            onClick={() => deleteOperation(operation.id)}
                            className='object-contain rounded-full'
                        />
                    </div>
                </div>

                <hr className='my-3 bg-slate-900' />

                <h4 onClick={() => getExpression(operation.id)} className='text-sm mb-1'><span className='font-semibold cursor-pointer hover:text-fuchsia-300 hover:underline duration-300'>Exp: </span>{operation.expression}</h4>
                <h4 onClick={() => getResult(operation.id)} className='text-sm'><span className='font-semibold cursor-pointer hover:text-fuchsia-300 hover:underline duration-300'>Res: </span>{operation.result}</h4>
            </div>
        </CSSTransition>
    )
}

export default OperationCard