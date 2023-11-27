"use client"

import { SwitchProjects, Diplomas, ContainerBoxes } from "@/components"

function Diploma() {
    return (
        <main className='bg-home'>
            <section className="bg-[url('/bg-main-blur-30.png')] relative flex justify-center min-w-screen min-h-screen">
                <ContainerBoxes className='flex flex-col h-full w-full max-w-[90vw] md:max-w-[80vw] my-10'>
                    <SwitchProjects type="diplomas" />
                    <Diplomas />
                </ContainerBoxes>
            </section>
        </main>
    )
}

export default Diploma