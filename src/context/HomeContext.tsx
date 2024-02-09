"use client"

import { baseApi } from "@/libs/baseURL";
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { useUser } from "@clerk/nextjs";
import { HomeContextType, DefaultContextProviderProps } from "@/types/context-types";
import { useRouter, usePathname } from "next/navigation";


// Create context
export const HomeContext = createContext<HomeContextType | null>(null);


// Hook to use context
export const useHomeContext = () => {
    const context = useContext(HomeContext)
    if (!context) {
        throw new Error('HomeContext must be inside of a context')
    } return context
};


// Data provider
export function HomeProvider({ children }: DefaultContextProviderProps) {
    const router = useRouter();
    const pahtname = usePathname();

    const validPathnames = '/' || '/projects/cars-store' || '/projects/cars-store/rents' || '/projects/cars-store/dashboard' || '/projects/calculator' || '/projects/tasks'
    const [codeProjects, setCodeProjects] = useState(true);
    const [loadPage, setLoadPage] = useState(false);

    // Clerk user
    const user = useUser();


    // Return the ID number of the database, according to the user.
    const getUserId = async () => {
        const userId = dataUser()?.id_clerk;
        if (userId) {
            try {
                const response = await fetch(`${baseApi}/create_user/${userId}`, {
                    method: 'GET',
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json()
                    const id = data?.id

                    return id
                }
            } catch (error) {
                console.log('An error getting user id was ocurred... ', error)
                return null
            }
        }
    };


    // Get the data of current user
    const dataUser = useCallback(() => {
        const hasGithubAccount = user.user?.externalAccounts.length !== undefined && user.user?.externalAccounts.length > 0 && user.user?.externalAccounts[0]?.provider === 'github' ? true : false;
        const githubEmail = hasGithubAccount ? user.user?.externalAccounts[0].emailAddress : undefined;

        // Validation Google
        const hasGoogleAccount = user.user?.externalAccounts.length !== undefined && user.user?.externalAccounts.length > 0 && user.user?.externalAccounts[1]?.provider === 'google' ? true : false;
        const googleEmail = hasGoogleAccount ? user.user?.externalAccounts[1].emailAddress : undefined;

        const data = {
            id_clerk: user.user?.id,
            username: user.user?.username,
            name: user.user?.firstName,
            lastname: user.user?.lastName,
            has_google_account: hasGoogleAccount,
            google_email: googleEmail,
            has_github_account: hasGithubAccount,
            github_email: githubEmail,
            created_at: user.user?.createdAt
        }

        return data
    }, [user.user]);


    // Code flow: User Registration

    // 3- Query the database to validate if the user exist
    const getUserDB = useCallback(async () => {
        if (user.user?.id) {
            try {
                const response = await fetch(`${baseApi}/create_user/${user.user.id}`, {
                    method: 'GET',
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json()
                    return data
                }
            } catch (error) {
                console.log('An error loading user was ocurred... ', error)
                return null
            }
        }
    }, [user.user?.id]);


    // 2- If the user exist return true, else return false
    const validation = useCallback(async () => {
        const data = await getUserDB();
        if (!data) {
            return false
        } else {
            const hasUser = data.id_clerk === user.user?.id ? true : false
            return hasUser
        }
    }, [user.user?.id, getUserDB]);


    // 1- Before that function register a new user, validate if the user already exist
    const registerUser = useCallback(async () => {
        const userExist = await validation();
        if (!userExist) {
            try {
                const data = dataUser();
                const response = await fetch(`${baseApi}/create_user`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(data),
                })

                if (response.ok) {
                    router.refresh()
                } else {
                    throw new Error('Failure in register user')
                }
            } catch (error) {
                console.log('Fetch error on register a new user', error)
            }
        }
    }, [router, validation, dataUser]);


    // 0- If the user is logged in, the function registerUser is executed
    useEffect(() => {
        if (user.isLoaded) {
            setLoadPage(true)
            if (user.user?.id && pahtname === validPathnames) {
                console.log('Home Context🎈')
                registerUser()
            }
        }
    }, [user.isLoaded, pahtname, , validPathnames, registerUser, user.user?.id])


    return <HomeContext.Provider value={{
        codeProjects,
        setCodeProjects,
        loadPage,
        dataUser,
        getUserId
    }}>
        {children}
    </HomeContext.Provider>
}

export default HomeContext