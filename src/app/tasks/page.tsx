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
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {tasks.sort((a, b) => b.id - a.id).map(task =>
                    <TaskCard task={task} key={task.id} />
                )}
            </ul>
        </main>
    )
}

export default TaskPage