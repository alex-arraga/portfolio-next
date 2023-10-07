import { prisma } from "@/libs/prisma"

const loadTasks = async () => {
    const tasks = await prisma.task.findMany()
    return tasks
}

async function TaskPage() {
    const tasks = await loadTasks()
    return (
        <main className="mt-10">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {tasks.map(task =>
                    <div key={task.id} className="bg-slate-800 p-7 rounded-md hover:bg-slate-600 duration-200 cursor-pointer">
                        <h3 className="text-2xl font-medium mb-2">{task.title}</h3>
                        <p className="font-light">{task.description}</p>
                    </div>
                )}
            </ul>
        </main>
    )
}

export default TaskPage