import React from 'react'
import { ContainerBoxes, SwitchProjects, MyProjects } from '@/components'

function page() {
    return (
        <main className='bg-home'>
            <section className='bg-[url("/bg-main-blur-30.png")] relative flex justify-center w-full min-w-screen min-h-screen'>
                <ContainerBoxes className='flex flex-col h-full w-full max-w-[90vw] md:max-w-[80vw] my-10'>
                    <SwitchProjects />
                    <MyProjects />
                </ContainerBoxes>
            </section>
        </main>
    )
}

export default page