import { prisma } from "@/libs/prisma"
import TaskCard from "@/components/tasks-components/TaskCard"
import { AppTasks } from '@/components/tasks-components/AppTasks/AppTasks'
import { currentUser } from "@clerk/nextjs/server";

async function page({ params }: { params: { id: string } }) {
    const user = await currentUser()

    const getCompletedTasks = async () => {
        const loadAllCompletedTasks = await prisma.taskCompleted.findMany({
            where: {
                user_clerk: user?.id
            }
        })
        return loadAllCompletedTasks
    };

    const tasksCompleted = await getCompletedTasks();

    return (
        <AppTasks params={params}>
            <main className="mt-10">

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

            </main>
        </AppTasks>
    )
}

export default page