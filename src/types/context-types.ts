import { SetStateAction } from "react"


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

// Home Provider
export type HomeProviderProps = {
    children: React.ReactNode
}