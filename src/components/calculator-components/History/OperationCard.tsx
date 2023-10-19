"use client"

import { CSSTransition } from 'react-transition-group';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react'
import '@/css/transition.css'
import { Operation } from '@/interfaces/calculator'


export function OperationCard({ operation }: { operation: Operation }) {
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);


    useEffect(() => {
        setIsAnimationEnabled(true);
    }, []);


    return (
        <CSSTransition classNames='fade'
            key={operation.id}
            in={isAnimationEnabled}
            timeout={1000}>

            <div key={operation.id} className='bg-sky-900 w-full h-28 rounded-md p-3 mb-5'>
                <div className='flex justify-between items-center'>
                    <p className='text-xs text-gray-200'>{operation.created_at.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <AiOutlineCloseCircle className='text-red-300 cursor-pointer hover:text-red-500 duration-300' />
                </div>

                <hr className='opacity-40 my-3' />

                <h4 className='text-sm mb-1'><span className='font-semibold cursor-pointer hover:text-fuchsia-300 hover:underline duration-300'>Exp: </span>{operation.expression}</h4>
                <h4 className='text-sm'><span className='font-semibold cursor-pointer hover:text-fuchsia-300 hover:underline duration-300'>Res: </span>{operation.result}</h4>
            </div>
        </CSSTransition>
    )
}

export default OperationCard