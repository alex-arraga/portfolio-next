import Calculator from "../Calculator"
import History from "../History/History"
import { UserButton } from "@clerk/nextjs"

function AppCalculator() {
    return (
        <main className="flex items-center relative h-screen justify-center w-full">
            <aside className="absolute left-0 top-0 w-full max-w-md">
                <History />
            </aside>
            <Calculator />
            <div className="absolute right-5 top-3 p-1 bg-gray-400 cursor-pointer rounded-full hover:bg-sky-200 active:bg-indigo-200 duration-200">
                <UserButton afterSignOutUrl="/sign-in" />
            </div>
        </main>

    )
}

export default AppCalculator