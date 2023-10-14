"use client"

import { Task } from "@prisma/client";
import { RxCrossCircled } from 'react-icons/rx';
import { BsCheck2Circle } from 'react-icons/bs';
import { useRouter } from "next/navigation";

interface Props {
    task: Task
    typePage?: string
}

export function TaskCard({ task, typePage }: Props) {
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

    const deleteCompletedTask = async (e: MouseEvent) => {
        e.stopPropagation();
        if (window.confirm('¿Confirma que quiere eliminar la tarea completada?')) {
            await fetch(`http://localhost:3000/api/tasks/completed/${task.id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
        }
        router.refresh()
    }

    const loadTask = async () => {
        const res = fetch(`http://localhost:3000/api/tasks/${task.id}`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error fetch request')
                } return response.json()
            })
            .then(data => {
                return data
            })
            .catch(err => {
                console.log(err)
            })
        return res
    }

    const createCompletedTask = async (e: MouseEvent, task: Task) => {
        e.stopPropagation()

        try {
            const data = await loadTask()
            console.log(data)

            const newCompletedTask = await fetch('http://localhost:3000/api/tasks/completed', {
                method: 'POST',
                body: JSON.stringify(data),
                credentials: 'include'
            })

            const deleteTask = await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
        } catch (error) {
            console.log(error)
        }
        router.refresh()
    }


    return (
        <>
            {
                typePage === 'completed' ?
                    <div key={task.id} className="bg-zinc-800 p-7 border-b-2 border-sky-600 hover:border-sky-400  rounded-md hover:bg-gray-950 duration-300">
                        <div className="flex justify-between items-start">
                            <div className="flex justify-between w-full">
                                <p className="flex bg-slate-700 text-xs md:text-sm italic mb-2 px-2 py-0.5 rounded-sm">Tarea completada</p>
                                <RxCrossCircled onClick={(e: MouseEvent) => deleteCompletedTask(e)} className='text-red-300 hover:text-red-500 focus:text-red-500 duration-500 cursor-pointer' />
                            </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium mb-2">{task.title}</h3>
                        <p className="font-light text-sm md:text-base">{task.description}</p>
                    </div>

                    : <div key={task.id} onClick={() => router.push(`/tasks/edit/${task.id}`)} className="bg-slate-800 p-7 border-b-2 border-pink-600 hover:border-pink-400 rounded-md hover:bg-sky-900 duration-300 cursor-pointer">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl md:text-2xl font-medium mb-2">{task.title}</h3>
                            <div className="flex gap-1.5">
                                <BsCheck2Circle onClick={(e: MouseEvent) => createCompletedTask(e, task)} className='text-emerald-100 hover:text-green-500 focus:text-green-500 duration-500 cursor-pointer' />
                                <RxCrossCircled onClick={(e: MouseEvent) => deleteTask(e)} className='text-red-300 hover:text-red-500 focus:text-red-500 duration-500 cursor-pointer' />
                            </div>
                        </div>
                        <p className="font-light text-sm md:text-base">{task.description}</p>
                    </div>
            }
        </>
    )
}

export default TaskCard