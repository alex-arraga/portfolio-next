import { prisma } from "@/libs/prisma"
import TaskCard from "@/components/TaskCard"

const loadTasks = async () => {
    const tasks = await prisma.task.findMany()
    return tasks
}

async function TaskPage() {
    const tasks = await loadTasks()
    return (
        <main className="mt-10">
            <>
                {tasks.length === 0
                    ? <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
                        <h2 className="text-base md:text-3xl opacity-30 font-light select-none">
                            No hay tareas pendientes
                        </h2>
                    </div>

                    : <ul className="grid mx-5 md:mx-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {tasks.sort((a, b) => b.id - a.id).map(task =>
                            <TaskCard task={task} key={task.id} />
                        )}
                    </ul>
                }
            </>
        </main>
    )
}

export default TaskPage