"use client"

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { baseURL } from '@/libs/baseURL';
import { useState, useEffect } from 'react'




// Context
import { createContext, useContext } from 'react'

export const CalculatorContext = createContext()

export const useCalculatorContext = () => {
    const context = useContext(CalculatorContext)
    if (!context) { console.log('useCalculator must be inside of a context') }
    return context
}

export const CalculatorProvider = ({ children }) => {
    const [doAOperation, setDoAOperation] = useState(false)

    const [recoverExpression, setRecoverExpression] = useState('')
    const [recoverResult, setRecoverResult] = useState('')
    const router = useRouter()

    // Refresh the History
    useEffect(() => {
        router.refresh()
        setDoAOperation(false)
    }, [doAOperation])

    // Async functions

    // Stores a list of objects as records in History
    const saveOperation = async (expression, result) => {
        try {
            const data = {
                expression,
                result
            }

            const response = await fetch(`${baseURL}/calculator`, {
                method: 'POST',
                body: JSON.stringify(data),
                credentials: 'include'
            })

            setDoAOperation(true)
        } catch (error) {
            console.log(error)
        }
    };


    const getExpression = async (id) => {
        try {
            const response = await fetch(`${baseURL}/calculator/${id}`, {
                method: 'GET',
                credentials: 'include'
            })
            const data = await response.json()
            const expression = data.getOperation.expression

            setRecoverExpression(expression)
        } catch (error) {
            console.log(error)
        }
    }


    const getResult = async (id) => {
        try {
            const response = await fetch(`${baseURL}/calculator/${id}`, {
                method: 'GET',
                credentials: 'include'
            })
            const data = await response.json()
            const result = data.getOperation.result

            setRecoverResult(result)
        } catch (error) {
            console.log(error)
        }
    }


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


    const deleteOperation = async (id) => {
        try {
            if (window.confirm('¿Confirma que quiere eliminar la operación?')) {
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


    return <CalculatorContext.Provider
        value={{
            saveOperation,
            deleteOperation,
            deleteAllOperations,
            getExpression,
            getResult,
            recoverExpression,
            recoverResult
        }}
    >
        {children}
    </CalculatorContext.Provider>
}