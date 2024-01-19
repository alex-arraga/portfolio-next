"use client"

import { DefaultContextProviderProps } from "@/types/context-types";
import { createContext, useContext, useEffect, useState } from "react";
import { useHomeContext } from "@/context/HomeContext";
import { useRouter } from "next/navigation";
import { baseApiProjectsUrl } from "@/libs/baseURL";
import { confirmToast } from "@/components/CustomToast";
import { toast } from "sonner";
import { CalculatorContextType } from "@/types/context-types";


// Create context
export const CalculatorContext = createContext<CalculatorContextType | null>(null)


// Hook
export const useCalculatorContext = () => {
    const context = useContext(CalculatorContext)
    if (!context) { console.log('useCalculator must be inside of a context') }
    return context
}


// Provider
export const CalculatorProvider = ({ children }: DefaultContextProviderProps) => {
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
    const saveOperation = async (expression: string, result: string) => {
        try {
            const data = {
                expression,
                result,
                user_id: await getUserId(),
                user_clerk: dataUser()?.id_clerk
            }

            await fetch(`${baseApiProjectsUrl}/calculator`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data)
            })

            setDoAOperation(true)
        } catch (error) {
            console.log(error)
        }
    };


    // Restore the exp of a operation
    const getExpression = async (id: number) => {
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
    const getResult = async (id: number) => {
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
            const confirm = await confirmToast('¿Confirma que quiere eliminar todas las operaciones?')
            if (confirm) {
                await fetch(`${baseApiProjectsUrl}/calculator/${id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                })

                router.refresh()
                toast.success('Todas las operaciones han sido eliminadas')
            }
        } catch (error) {
            toast.error('Se produjo un error, inténtelo de nuevo')
            console.log(error)
        }
    };


    const deleteOperation = async (id: number) => {
        try {
            const confirm = await confirmToast('¿Confirma que quiere eliminar la operación?')
            if (confirm) {
                await fetch(`${baseApiProjectsUrl}/calculator/calcs/${id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                })

                router.refresh()
                toast.success('Operación eliminada')
            }
        } catch (error) {
            toast.error('Se produjo un error, inténtelo de nuevo')
            console.log(error)
        }
    };


    return <CalculatorContext.Provider
        value={{
            modalIsVisible,
            setModalIsVisible,
            valueScreen,
            setValueScreen,
            lastResult,
            setLastResult,
            saveOperation,
            getExpression,
            getResult,
            deleteAllOperations,
            deleteOperation,
        }}
    >
        {children}
    </CalculatorContext.Provider>
}


export default CalculatorContext