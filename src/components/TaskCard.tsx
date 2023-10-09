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

    return (
        <div key={task.id} onClick={() => router.push(`/tasks/edit/${task.id}`)} className="bg-slate-800 p-7 rounded-md hover:bg-slate-600 duration-200 cursor-pointer">
            <div className="flex justify-between">
                <h3 className="text-2xl font-medium mb-2">{task.title}</h3>
                <div className="flex gap-1.5">
                    <BsCheck2Circle className='text-emerald-100 hover:text-green-500 focus:text-green-500 duration-500 cursor-pointer' />
                    <RxCrossCircled className='text-red-300 hover:text-red-500 focus:text-red-500 duration-500 cursor-pointer' />
                </div>
            </div>
            <p className="font-light">{task.description}</p>
        </div>
    )
}

export default TaskCard