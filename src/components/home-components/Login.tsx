import { SignIn } from "@clerk/nextjs";
import Image from "next/image"

function Login() {
    return (
        <div className="flex flex-col min-h-screen h-full justify-center items-center">
            <Image
                src={'/header-icon.svg'}
                alt="main icon"
                width={50}
                height={50}
                className="absolute top-3 left-3 xl:left-5 xl:top-5 hidden md:block md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px]"
            />

            <div className="relative flex flex-col justify-center mt-4 xl:mt-6 items-center gap-6 w-full max-h-[20vh]">
                <h1 className="text-center mx-4 text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-white">
                    ¡Hola internauta, bienvenido a mi Portfolio Web!
                </h1>
                <p className="text-center mx-4 text-sm xl:text-sm text-gray-300">
                    Hay mucho por descubrir y nada de tiempo que perder <br /> ¿Qué te parece si comenzamos nuestro viaje?
                </p>
            </div>

            <div className="flex relative h-full my-6 w-[80vw] md:w-[50vw] xl:w-[35vw] max-h-[450px] xl:max-h-[600px]  justify-center items-start">
                <SignIn />
            </div>

            <Image
                src={'/astronaut-index.svg'}
                alt=""
                height={300}
                width={300}
                className="object-contain absolute bottom-0 right-0 hidden xl:block"
            />
        </div >
    )
}

export default Login