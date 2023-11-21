import React from 'react'
import Image from 'next/image'
import { CustomButton, ContainerBoxes, SwitchProjects } from '@/components'

function page() {
    return (
        <main className='bg-home relative flex justify-center w-full min-w-screen min-h-screen'>
            <ContainerBoxes className='flex flex-col h-full max-w-[90vw] my-10'>
                {/* Switch */}
                <SwitchProjects />

            </ContainerBoxes>
        </main>
    )
}

export default page