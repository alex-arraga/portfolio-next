"use client"

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { baseApiProjectsUrl } from '@/libs/baseURL';
import { useState, useEffect } from 'react'
import { confirmToast } from '@/components/CustomToast';
import { createContext, useContext } from 'react'
import { useHomeContext } from './HomeContext';

export const CalculatorContext = createContext()

export const useCalculatorContext = () => {
    const context = useContext(CalculatorContext)
    if (!context) { console.log('useCalculator must be inside of a context') }
    return context
}


export const CalculatorProvider = ({ children }) => {
    const { getUserId, dataUser } = useHomeContext();
    const router = useRouter()

    // State history
    const [modalIsVisible, setModalIsVisible] = useState(false)

    // States calculator
    const [valueScreen, setValueScreen] = useState('');
    const [lastResult, setLastResult] = useState('');
    const [doAOperation, setDoAOperation] = useState(false)

    // Refresh the History
    useEffect(() => {
        router.refresh()
        setDoAOperation(false)
    }, [doAOperation]);


    // Async functions

    // Stores a list of objects as records in History
    const saveOperation = async (expression, result) => {
        try {
            const data = {
                expression,
                result,
                user_id: await getUserId(),
                user_clerk: dataUser().id_clerk
            }

            await fetch(`${baseApiProjectsUrl}/calculator`, {
                method: 'POST',
                body: JSON.stringify(data),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            setDoAOperation(true)
        } catch (error) {
            console.log(error)
        }
    };

    // Restore the exp of a operation
    const getExpression = async (id) => {
        try {
            const response = await fetch(`${baseApiProjectsUrl}/calculator/calcs/${id}`, {
                method: 'GET',
                credentials: 'include'
            })
            const data = await response.json()
            const expression = data.getOperation.expression

            setValueScreen(valueScreen + expression)
        } catch (error) {
            console.log(error)
        }
    };

    // Restore the res of a operation
    const getResult = async (id) => {
        try {
            const response = await fetch(`${baseApiProjectsUrl}/calculator/calcs/${id}`, {
                method: 'GET',
                credentials: 'include'
            })
            const data = await response.json()
            const result = data.getOperation.result

            setValueScreen(valueScreen + result)
        } catch (error) {
            console.log(error)
        }
    };


    const deleteAllOperations = async () => {
        const id = await getUserId();
        try {
            await fetch(`${baseApiProjectsUrl}/calculator/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            router.refresh()
        } catch (error) {
            console.log(error)
        }
    };


    const deleteOperation = async (id) => {
        try {
            const confirm = await confirmToast('¿Confirma que quiere eliminar la operación?')
            if (confirm) {
                await fetch(`${baseApiProjectsUrl}/calculator/calcs/${id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                })

                router.refresh()
                toast.success('Se ha eliminado la operación')
            }
        } catch (error) {
            console.log(error)
        }
    };


    return <CalculatorContext.Provider
        value={{
            valueScreen,
            setValueScreen,
            lastResult,
            setLastResult,
            saveOperation,
            deleteOperation,
            deleteAllOperations,
            modalIsVisible,
            setModalIsVisible,
            getExpression,
            getResult,
        }}
    >
        {children}
    </CalculatorContext.Provider>
}