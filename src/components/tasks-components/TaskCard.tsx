"use client"

import { useRouter } from "next/navigation";

import { RxCrossCircled } from 'react-icons/rx';
import { BsCheck2Circle } from 'react-icons/bs';
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
                    <Card key={task.id} className="bg-zinc-800 p-7 border-b-2 border-sky-600 hover:border-sky-400  rounded-md hover:bg-gray-950 duration-300">
                        <div className="flex justify-between items-start">
                            <div className="flex justify-between w-full">
                                <p className="flex bg-slate-700 text-xs md:text-sm italic mb-2 px-2 py-0.5 rounded-sm">Tarea completada</p>
                                <RxCrossCircled onClick={(e: MouseEvent) => deleteCompletedTask(e, task)} className='text-red-300 hover:text-red-500 focus:text-red-500 duration-500 cursor-pointer' />
                            </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium mb-2">{task.title}</h3>
                        <p className="font-light text-sm md:text-base">{task.description}</p>
                    </Card>

                    :

                    <Card key={task.id} onClick={() => router.push(`/projects/tasks/edit/${task.id}`)}
                        className="bg-slate-800 p-7 border-b-2 border-pink-600 hover:border-pink-400 rounded-md hover:bg-sky-900 duration-300 cursor-pointer">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl md:text-2xl font-medium mb-2">{task.title}</h3>
                            <div className="flex gap-1.5">
                                <BsCheck2Circle onClick={(e: MouseEvent) => createCompletedTask(e, task)} className='text-emerald-100 hover:text-green-500 focus:text-green-500 duration-500 cursor-pointer' />
                                <RxCrossCircled onClick={(e: MouseEvent) => deleteTask(e, task)} className='text-red-300 hover:text-red-500 focus:text-red-500 duration-500 cursor-pointer' />
                            </div>
                        </div>
                        <p className="font-light text-sm md:text-base">{task.description}</p>
                    </Card>
            }
        </>
    )
}

export default TaskCard