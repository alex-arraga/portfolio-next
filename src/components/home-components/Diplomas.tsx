"use client"

import Image from "next/image"

function Diplomas() {
    return (
        <div className='grid grid-cols-2 w-full h-full gap-6'>
            <div className='relative rounded-2xl md:w-[500px] md:h-[300px] border-2 hover:bg-opacity-80 duration-300 cursor-pointer border-sky-800 bg-sky-900 bg-opacity-50'>
                <Image
                    src={'/basic-code.jpg'}
                    alt="code - platzi"
                    fill
                    className="object-contain"
                />
            </div>
            <div className='relative rounded-2xl md:w-[500px] md:h-[300px] border-2 hover:bg-opacity-80 duration-300 cursor-pointer border-sky-800 bg-sky-900 bg-opacity-50'>
                <Image
                    src={'/design-figma.jpg'}
                    alt="figma design - udemy"
                    fill
                    className="object-contain"
                />
            </div>
            <div className='relative rounded-2xl md:w-[500px] md:h-[300px] border-2 hover:bg-opacity-80 duration-300 cursor-pointer border-sky-800 bg-sky-900 bg-opacity-50'>
                <Image
                    src={'/design-interfaces.jpg'}
                    alt="figma design interfaces - udemy"
                    fill
                    className="object-contain"
                />
            </div>
            <div className='relative rounded-2xl md:w-[500px] md:h-[300px] border-2 hover:bg-opacity-80 duration-300 cursor-pointer border-sky-800 bg-sky-900 bg-opacity-50'>
                <Image
                    src={'/design-systems.jpg'}
                    alt="design systems - domestika"
                    fill
                    className="object-contain"
                />
            </div>
            <div className='relative rounded-2xl md:w-[500px] md:h-[300px] border-2 hover:bg-opacity-80 duration-300 cursor-pointer border-sky-800 bg-sky-900 bg-opacity-50'>
                <Image
                    src={'/photoshop.jpg'}
                    alt="photoshop - domestika"
                    fill
                    className="object-contain"
                />
            </div>
            <div className='relative rounded-2xl md:w-[500px] md:h-[300px] border-2 hover:bg-opacity-80 duration-300 cursor-pointer border-sky-800 bg-sky-900 bg-opacity-50'>
                <Image
                    src={'/ilustrator.jpg'}
                    alt="ilustrator - domestika"
                    fill
                    className="object-contain"
                />
            </div>
            <div className='relative rounded-2xl md:w-[500px] md:h-[300px] border-2 hover:bg-opacity-80 duration-300 cursor-pointer border-sky-800 bg-sky-900 bg-opacity-50'>
                <Image
                    src={'/after-effects.jpg'}
                    alt="after effects - domestika"
                    fill
                    className="object-contain"
                />
            </div>

        </div>
    )
}

export default Diplomas