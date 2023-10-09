"use client"

import { Task } from "@prisma/client";
import { RxCrossCircled } from 'react-icons/rx';
import { BsCheck2Circle } from 'react-icons/bs';
import { useRouter } from "next/navigation";

interface Props {
    task: Task
}

export function TaskCard({ task }: Props) {

    const router = useRouter()

    const deleteTask = async (e: MouseEvent) => {
        e.stopPropagation();
        if (window.confirm('¿Confirma que quiere eliminar la tarea?')) {
            await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
        }
        router.refresh()
    }

    return (
        <div key={task.id} onClick={() => router.push(`/tasks/edit/${task.id}`)} className="bg-slate-800 p-7 hover:border-b-2 border-pink-400 rounded-md hover:bg-sky-900 duration-300 cursor-pointer">
            <div className="flex justify-between items-start">
                <h3 className="text-2xl font-medium mb-2">{task.title}</h3>
                <div className="flex gap-1.5">
                    <BsCheck2Circle className='text-emerald-100 hover:text-green-500 focus:text-green-500 duration-500 cursor-pointer' />
                    <RxCrossCircled onClick={(e: MouseEvent) => deleteTask(e)} className='text-red-300 hover:text-red-500 focus:text-red-500 duration-500 cursor-pointer' />
                </div>
            </div>
            <p className="font-light">{task.description}</p>
        </div>
    )
}

export default TaskCard