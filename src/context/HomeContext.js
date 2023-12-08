"use client"

import { baseApi } from "@/libs/baseURL";
import { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

// Create context
export const HomeContext = createContext()

// Hook to use context
export const useHomeContext = () => {
    const context = useContext(HomeContext)
    if (!context) {
        throw new Error('HomeContext must be inside of a context')
    } return context
}

// Data provider
export function HomeProvider({ children }) {
    const [codeProjects, setCodeProjects] = useState(true);
    const [image, setImage] = useState('');
    const [loadPage, setLoadPage] = useState(false)


    // Clerk user
    const user = useUser();


    useEffect(() => {
        if (user.isLoaded) {
            dataUser()
            if (dataUser !== undefined || null) {
                setLoadPage(true)
                call()
            }
        }
    }, [user])


    const getUserId = async () => {
        const userId = dataUser()?.id_clerk;
        if (loadPage === true && userId !== undefined) {
            const userDB = await fetch(`${baseApi}/create_user/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await userDB.json()
            const id = data?.id
            console.log(id)

            return id
        }
    }


    const dataUser = () => {
        if (user.user !== undefined && loadPage === true) {
            const hasGithubAccount = user.user?.externalAccounts.length !== undefined && user.user?.externalAccounts.length > 0 && user.user?.externalAccounts[0].provider === 'github' ? true : false;
            const githubEmail = hasGithubAccount ? user.user?.externalAccounts[0].emailAddress : undefined;

            // Validation Google
            const hasGoogleAccount = user.user?.externalAccounts.length !== undefined && user.user?.externalAccounts.length > 0 && user.user?.externalAccounts[1].provider === 'google' ? true : false;
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
        }
    }


    const getUserDB = async () => {
        if (loadPage === true && user.user) {
            const userDB = await fetch(`${baseApi}/create_user/${user.user.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await userDB.json()
            return data
        }
    }


    const validation = async () => {
        if (loadPage === true) {
            const data = await getUserDB()
            if (!data) {
                return false
            } else {
                const hasUser = data.id_clerk === user.user?.id ? true : false
                return hasUser
            }
        }
    }


    const registerUser = async () => {
        const userExist = await validation();
        if (userExist === false) {
            try {

                const data = dataUser()
                await fetch(`${baseApi}/create_user`, {
                    method: 'POST',
                    body: JSON.stringify(data)
                })
            } catch (error) {
                console.log('Fetch error on register a new user', error)
            }
        }
    }


    const call = async () => {
        await registerUser()
    }

    return <HomeContext.Provider value={{
        codeProjects,
        setCodeProjects,
        image,
        setImage,
        loadPage,
        dataUser,
        getUserId
    }}>
        {children}
    </HomeContext.Provider>
}

export default HomeContext