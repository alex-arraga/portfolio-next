"use client"

import Image from "next/image"

function Login() {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <Image
                src={'/header-icon.svg'}
                alt="main icon"
                width={50}
                height={50}
                className="absolute top-3 left-3 xl:left-5 xl:top-5 hidden md:block md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px]"
            />

            <div className="relative flex flex-col justify-center mt-4 xl:mt-6 items-center gap-6 w-full max-h-[20vh]">
                <h1 className="text-center mx-4 text-[16px] sm:text-[18px] md:text-[20px] xl:text-[24px] font-semibold text-white">
                    ¡Hola internauta, bienvenido a mi Portfolio Web!
                </h1>
                <p className="text-center mx-4 text-[12px] xl:text-[14px] text-gray-300">
                    Hay mucho por descubrir y nada de tiempo que perder <br /> ¿Qué te parece si comenzamos nuestro viaje?
                </p>
            </div>

            <div className="flex justify-center items-center rounded-xl w-[80vw] md:w-[40vw] xl:w-[30vw] p-6 md:p-8 xl:p-16 m-8 xl:m-10 h-full max-h-[450px] xl:max-h-[600px] bg-black border-2 border-white">
                <form className="flex flex-col gap-10 justify-start items-start w-full h-full">
                    <input type="text" name="name" placeholder="Nombre" required className="w-full h-6 md:-8 px-2 text-white bg-transparent border-b-2 border-white border-opacity-20 text-[10px] md:text-[12px] xl:text-[14px]" />
                    <input type="email" name="email" placeholder="Email" required className="w-full h-6 md:h-8 px-2 text-white bg-transparent border-b-2 border-white border-opacity-20 text-[10px] md:text-[12px] xl:text-[14px]" />
                    <input type="password" name="password" placeholder="Contraseña" required className="w-full h-6 md:h-8 px-2 text-white bg-transparent border-b-2 border-white border-opacity-20 text-[10px] md:text-[12px] xl:text-[14px]" />

                    <div className="flex flex-col gap-4 md:gap-6 justify-center items-center w-full">
                        <button className="btn-login flex justify-center items-center w-full max-w-[200px] md:max-w-[260px] h-6 md:h-8 rounded-md text-white font-medium text-[10px] md:text-[12px] xl:text-[14px] hover:scale-110 duration-200">
                            ¡Comencemos!
                        </button>
                        <button className="flex justify-center w-full max-w-[200px] md:max-w-[260px] h-6 md:h-8 rounded-md items-center gap-2 bg-white text-black-100 font-medium text-[10px] md:text-[12px] xl:text-[14px] hover:scale-110 duration-200">
                            <Image
                                src={'/google-icon.svg'}
                                alt="google icon"
                                width={22}
                                height={22}
                                className="object-contain w-[16px] h-[16px] md:w-[22px] md:h-[22px]"
                            />
                            Continuar con Google
                        </button>

                        <p className="text-[10px] md:text-[12px] xl:text-[14px] font-medium text-gray-300">¿No estas registrado? <span className="font-semibold text-violet-300 hover:text-violet-500 duration-200 cursor-pointer">Regístrate</span></p>
                    </div>
                </form>

                <Image
                    src={'/astronaut-index.svg'}
                    alt=""
                    height={300}
                    width={300}
                    className="object-contain absolute bottom-0 right-0 hidden xl:block"
                />
            </div>
        </div>
    )
}

export default Login