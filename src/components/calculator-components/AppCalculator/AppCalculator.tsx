import Calculator from "../Calculator"
import History from "../History/History"

function AppCalculator() {
    return (
        <main className="flex items-center relative h-screen justify-center w-full">
            <aside className="absolute left-0 top-0 w-full max-w-md">
                <History />
            </aside>
            <Calculator />
        </main>

    )
}

export default AppCalculator