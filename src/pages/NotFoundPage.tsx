import Link from "next/link"

export function NotFoundPage() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gradient-to-r from-sky-950 to-black p-40 rounded-xl">
                <h1 className="text-4xl font-semibold my-5">¡Te has perdido!</h1>
                <h2 className="flex text-6xl font-semibold text-blue-400 justify-center w-full my-5">404</h2>
                <Link href={'/tasks'} className="flex justify-center py-4 px-6 rounded-full bg-violet-800 text-white my-5">
                    Regresar al Home
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage