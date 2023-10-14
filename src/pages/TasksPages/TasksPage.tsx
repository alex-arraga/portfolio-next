import { prisma } from "@/libs/prisma"
import TaskCard from "@/components/tasks-components/TaskCard"
import { App } from '@/components/tasks-components/AppTasks.tsx/AppTasks'

const loadTasks = async () => {
    const loadAllTasks = await prisma.task.findMany()
    return loadAllTasks
}

const loadCompletedTasks = async () => {
    const loadAllCompletedTasks = await prisma.taskCompleted.findMany()
    return loadAllCompletedTasks
}

async function TasksPage({ params, typePage }: { params: { id: string | undefined }, typePage?: string }) {
    const tasksPendient = await loadTasks()
    const tasksCompleted = await loadCompletedTasks()

    return (
        <App params={params}>
            <main className="mt-10">
                {
                    typePage === 'completed' ?
                        <>
                            {tasksCompleted.length === 0
                                ? <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
                                    <h2 className="text-base md:text-3xl opacity-30 font-light select-none">
                                        No completaste tareas
                                    </h2>
                                </div>

                                : <ul className="grid mx-5 md:mx-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                    {tasksCompleted.sort((a, b) => b.id - a.id).map(task =>
                                        <TaskCard task={task} key={task.id} typePage='completed' />
                                    )}
                                </ul>
                            }
                        </>
                        :
                        <>
                            {
                                tasksPendient.length === 0
                                    ? <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
                                        <h2 className="text-base md:text-3xl opacity-30 font-light select-none">
                                            No hay tareas pendientes
                                        </h2>
                                    </div>

                                    : <ul className="grid mx-5 md:mx-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                        {tasksPendient.sort((a, b) => b.id - a.id).map(task =>
                                            <TaskCard task={task} key={task.id} />
                                        )}
                                    </ul>
                            }
                        </>

                }
            </main>
        </App>

    )
}

export default TasksPage