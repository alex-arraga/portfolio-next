"use client"

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Card } from "./Card";

import { PropsTaskCard } from "@/types/tasks";
import { useTasksContext } from "@/context/TasksContext";

export function TaskCard({ task, typePage }: PropsTaskCard) {
    const router = useRouter();
    const { deleteTask, deleteCompletedTask, createCompletedTask } = useTasksContext();

    return (
        <>
            {
                typePage === 'completed' ?
                    <Card key={task.id} className="relative bg-zinc-800 p-7 border-b-2 border-sky-600 hover:border-sky-400 rounded-md hover:brightness-110 duration-300">

                        <p className="absolute top-0 left-0 flex justify-center items-center w-full py-1 text-txt_10 md:text-xs border-b-2 border-slate-600 border-opacity-50 rounded-xl rounded-t-md italic text-gray-400">Tarea completada</p>
                        <div className="flex justify-between mt-4 items-start">
                            <div className="flex justify-between w-full">
                                <div className="flex h-fit w-full items-start justify-between">
                                    <h3 className="text-base sm:text-lg md:text-xl font-medium">{task.title}</h3>
                                    <div>
                                        <Image
                                            src={'/cross-close-rounded-red.svg'}
                                            alt="close"
                                            width={20}
                                            height={20}
                                            onClick={(e) => deleteCompletedTask(e, task)}
                                            className='object-contain cursor-pointer ml-4 h-4 w-4 sm:h-[18px] sm:w-[18px] 2xl:w-5 2xl:h-5 hover:scale-125 duration-200'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="flex justify-center w-full h-2 my-2 sm:my-4 opacity-30" />
                        <p className="font-light text-sm md:text-base">{task.description}</p>
                    </Card>

                    :

                    <Card key={task.id} onClick={() => router.push(`/projects/tasks/edit/${task.id}`)}
                        className="bg-slate-800 p-7 border-b-2 border-pink-600 hover:border-pink-400 rounded-md hover:brightness-110 duration-300 cursor-pointer">
                        <div className="flex justify-between items-start">
                            <h3 className="text-base sm:text-lg md:text-xl font-medium">{task.title}</h3>
                            <div className="flex gap-3 md:gap-2 mx-4 sm:ml-4">
                                <Image
                                    src={'/check-rounded-green.svg'}
                                    alt="check to completed"
                                    width={20}
                                    height={20}
                                    onClick={(e) => createCompletedTask(e, task)}
                                    className='object-contain cursor-pointer ml-4 h-4 w-4 sm:h-[18px] sm:w-[18px] 2xl:w-5 2xl:h-5 hover:scale-125 duration-200'
                                />
                                <Image
                                    src={'/cross-close-rounded-red.svg'}
                                    alt="close"
                                    width={20}
                                    height={20}
                                    onClick={(e) => deleteTask(e, task)}
                                    className='object-contain cursor-pointer ml-4 h-4 w-4 sm:h-[18px] sm:w-[18px] 2xl:w-5 2xl:h-5 hover:scale-125 duration-200'
                                />
                            </div>
                        </div>
                        <hr className="flex justify-center w-full h-2 my-2 sm:my-4 opacity-30" />
                        <p className="font-light text-sm md:text-base">{task.description}</p>
                    </Card>
            }
        </>
    )
}

export default TaskCard