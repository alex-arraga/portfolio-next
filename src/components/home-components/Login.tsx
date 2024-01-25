import { SignIn } from "@clerk/nextjs";
import Image from "next/image"

function Login() {
    return (
        <div className="flex flex-col min-h-screen h-full justify-center items-center">
            <div className="flex w-screen justify-center items-center md:absolute md:justify-start md:left-0 md:top-0 md:w-fit p-2 mb-2">
                <Image
                    src={'/header-icon.svg'}
                    alt="main icon"
                    width={45}
                    height={45}
                    className="object-contain md:ml-2"
                />
            </div>

            <div className="relative flex flex-col justify-center items-center gap-6 w-full max-h-[20vh]">
                <h1 className="text-center mx-4 text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-indigo-100">
                    ¡Hola internauta, bienvenido a mi Portfolio Web!
                </h1>
                <p className="text-center mx-4 text-sm xl:text-sm text-gray-300">
                    Hay mucho por descubrir y nada de tiempo que perder <br /> ¿Qué te parece si comenzamos nuestro viaje?
                </p>
            </div>

            <div className="flex relative h-full my-6 w-[80vw] md:w-[50vw] xl:w-[35vw] max-h-[450px] xl:max-h-[600px]  justify-center items-start">
                <SignIn afterSignInUrl={'/'} path="/sign-in" routing="path" />
            </div>

            <Image
                src={'/astronaut-index.svg'}
                alt="astronaut"
                height={300}
                width={300}
                className="object-contain absolute bottom-0 right-0 hidden xl:block"
            />
        </div >
    )
}

export default Login