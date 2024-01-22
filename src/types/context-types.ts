import { Task } from "@prisma/client"
import { SetStateAction } from "react"
import { CarCardProps, DataNewCar, RentedCarCardProps } from "./cars-store"


// Home Context 
export type HomeContextType = {
    codeProjects: boolean,
    setCodeProjects: React.Dispatch<SetStateAction<boolean>>,
    image: string,
    setImage: React.Dispatch<SetStateAction<string>>,
    loadPage: boolean,
    dataUser: () => {
        id_clerk?: string | null,
        username?: string | null,
        name?: string | null,
        lastname?: string | null,
        has_google_account?: boolean | null,
        google_email?: string | null,
        has_github_account?: boolean | null,
        github_email?: string | null,
        created_at?: Date | null
    } | undefined,
    getUserId: () => Promise<any>
}


// Calculator Context
export type CalculatorContextType = {
    modalIsVisible: boolean,
    setModalIsVisible: React.Dispatch<SetStateAction<boolean>>,
    valueScreen: string,
    setValueScreen: React.Dispatch<SetStateAction<string>>,
    lastResult: string,
    setLastResult: React.Dispatch<SetStateAction<string>>,
    saveOperation: (expression: string, result: string) => Promise<void>,
    getExpression: (id: number) => Promise<void>,
    getResult: (id: number) => Promise<void>,
    deleteAllOperations: () => Promise<void>
    deleteOperation: (id: number) => Promise<void>
}


// Task Context
export type TaskContextType = {
    idParam: string,
    setIdParam: React.Dispatch<SetStateAction<string>>,
    setDescriptionData: React.Dispatch<SetStateAction<string>>,
    setTitleData: React.Dispatch<SetStateAction<string>>,
    loadTask: (id: string) => Promise<any>,
    onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>,
    deleteTask: (e: React.MouseEvent, task: Task) => Promise<void>,
    deleteCompletedTask: (e: React.MouseEvent, task: Task) => Promise<void>,
    createCompletedTask: (e: React.MouseEvent, task: Task) => Promise<void>
}


// Cars Context 
export type CarsContextType = {
    isClientLoaded: boolean,
    sectionLikes: boolean,
    setSectionLikes: React.Dispatch<SetStateAction<boolean>>,
    searchParams: URLSearchParams | "",
    hasManufacturer: string | null,
    hasModel: string | null,
    newCar: (car: DataNewCar) => Promise<any>,
    manageLikes: (car: RentedCarCardProps | CarCardProps) => Promise<void>,
    newPendingCar: (car: CarCardProps, orderId: string) => Promise<void>,
    newOrder: (car: RentedCarCardProps | CarCardProps, orderId: string, durationRented: number, costRent?: number, suscription?: number) => Promise<any>
}

// Default Provider
export type DefaultContextProviderProps = {
    children: React.ReactNode
}