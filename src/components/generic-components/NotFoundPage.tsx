"use client"

import Image from "next/image"

function NotFoundPage() {
    return (
        <main className='bg-home'>
            <section className='bg-[url("/bg-main-blur-30.png")] flex flex-col gap-6 md:gap-10 xl:gap-12 justify-center items-center w-full min-w-screen min-h-screen'>
                <Image
                    // TODO: si no es una variable o una concatenacion con una variable no hacen falta los {}, puede ir con comillas no mas src="/astronaut.svg", revisalo en todo el proye buscando "{'"
                    src={'/astronaut.svg'}
                    alt="astronaut"
                    width={200}
                    height={200}
                    className="object-contain absolute top-10 left-10 hidden md:block md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px]"
                />
                <div className="relative flex justify-center items-center w-full h-[20vh] md:h-[25vh] xl:h-[30vh]">
                    <Image
                        src={'/404.png'}
                        alt="404"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col gap-6 md:gap-10 xl:gap-12">
                    {/* TODO: veo muchas clases hardcodeadas con el -[xxx], eso se usa solo en casos donde no se la va a volver a utilizar en otro lado, ademas el tamano de los textos debe estar en rem o em, luego te explico por que, esto vamos a configurarlo desde el archivo de config de tailwindcss */}
                    <p className="w-full h-full px-4 text-center text-gray-300 font-medium text-base sm:text-xl md:text-2xl xl:text-3xl">Oops... ¡Parece que te has perdido en el espacio!</p>
                    <button className="flex justify-center items-center w-full h-10 md:h-12">
                        <a href="/" className="flex justify-center items-center bg-indigo-300 hover:bg-indigo-200 duration-200 w-[200px] md:w-[250px] xl:w-[300px] h-full rounded-md text-black font-semibold text-sm md:text-base xl:text-xl">
                            ¡Regresar a la atmosfera!
                        </a>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default NotFoundPage