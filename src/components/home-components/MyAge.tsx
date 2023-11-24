import React from 'react'

function MyAge() {
    return (
        <>
            <p className="absolute text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] top-2 md:top-4 xl:top-10 text-gray-200">Edad</p>
            <p className="text-white font font-semibold text-[40px] sm:text-[80px] md:text-[100px] xl:text-[120px]">23</p>
            <p className="absolute text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] bottom-2 md:bottom-4 xl:bottom-10 text-gray-200">Años</p>
        </>
    )
}

export default MyAge