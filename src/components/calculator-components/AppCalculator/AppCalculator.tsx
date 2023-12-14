import Calculator from "../Calculator"
import History from "../History/History"
import { UserButton } from "@clerk/nextjs"

function AppCalculator() {
    return (
        <main className="flex items-center z-0 relative h-screen justify-center w-full">
            <aside className="absolute top-0 z-0 w-full h-10">
                <div className="flex justify-between w-full h-full items-center">
                    <div className="flex h-full w-full sm:max-w-md">
                        <History />
                    </div>
                    <div className="p-1 mr-4 mt-4 bg-gray-400 cursor-pointer rounded-full hover:bg-sky-200 active:bg-indigo-200 duration-200">
                        <UserButton afterSignOutUrl="/sign-in" />
                    </div>
                </div>
            </aside>
            <Calculator />
        </main>

    )
}

export default AppCalculator