"use client"

import { CSSTransition } from 'react-transition-group';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react'
import '@/css/transition.css'
import { Operation } from '@/interfaces/calculator'
import { baseURL } from '@/libs/baseURL';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


export function OperationCard({ operation }: { operation: Operation }) {
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
    const nodeRef = useRef(null);
    const router = useRouter()


    useEffect(() => {
        setIsAnimationEnabled(true);
    }, []);


    const deleteOperation = async (id: number) => {
        try {
            if (window.confirm('Confirma que quiere eliminar la operación')) {
                await fetch(`${baseURL}/calculator/${id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                })
                router.refresh()
                toast.success('Se ha eliminado la operación')
            }
        } catch (error) {
            console.log(error)
        }
    }


    const getExpression = async (id: number) => {
        try {
            const response = await fetch(`${baseURL}/calculator/${id}`, {
                method: 'GET',
                credentials: 'include'
            })

            const data = await response.json()
            const expression = data.getOperation.expression

            console.log(expression)
            return expression
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <CSSTransition classNames='fade'
            key={operation.id}
            in={isAnimationEnabled}
            timeout={1000}
            nodeRef={nodeRef}>

            <div ref={nodeRef} key={operation.id} className='bg-sky-800 w-full h-28 rounded-md p-3 mb-5'>
                <div className='flex justify-between items-center'>
                    <p className='text-xs text-gray-200'>{operation.created_at.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <AiOutlineCloseCircle onClick={() => deleteOperation(operation.id)} className='text-red-300 cursor-pointer hover:text-red-500 duration-300' />
                </div>

                <hr className='my-3 bg-slate-900' />

                <h4 onClick={() => getExpression(operation.id)} className='text-sm mb-1'><span className='font-semibold cursor-pointer hover:text-fuchsia-300 hover:underline duration-300'>Exp: </span>{operation.expression}</h4>
                <h4 className='text-sm'><span className='font-semibold cursor-pointer hover:text-fuchsia-300 hover:underline duration-300'>Res: </span>{operation.result}</h4>
            </div>
        </CSSTransition>
    )
}

export default OperationCard