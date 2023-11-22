"use client"

import { SwitchProjects, Diplomas, ContainerBoxes } from "@/components"

function page() {
    return (
        <main className='bg-home relative flex justify-center w-full min-w-screen min-h-screen'>
            <ContainerBoxes className='flex flex-col h-full max-w-[70vw] my-10'>
                <SwitchProjects type="diplomas" />
                <Diplomas />
            </ContainerBoxes>
        </main>
    )
}

export default page