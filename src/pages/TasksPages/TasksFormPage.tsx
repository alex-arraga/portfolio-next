"use client"

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { baseURL } from '@/libs/baseURL';

import { ErrorMessage } from '@/components/ErrorMessage';
import { Label } from '@/components/Label';
import { AppTasks } from '@/components/tasks-components/AppTasks/AppTasks'
import { toast } from 'sonner';

export function TasksFormPage({ id }: { id: string | undefined }) {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const router = useRouter()

    // Get info of a task
    const loadTask = async () => {
        const res = fetch(`${baseURL}/tasks/${id}`, {
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

    // Get info of the inputs to can edit them
    useEffect(() => {
        if (id) {
            loadTask()
                .then(res => {
                    setValue('title', res.title)
                    setValue('description', res.description)
                })
        }
    }, [])

    // Create & Update tasks
    const onSubmit = handleSubmit(async (data) => {
        // Create new task
        if (!id) {
            try {
                const createTask = await fetch(`${baseURL}/tasks`, {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(data)
                })
                createTask.status === 200 ? router.push('/projects/tasks') : ''
                toast.success('Tarea creada con éxito')
            } catch (error) {
                console.log(error)
                toast.error('No se ha podido crear la tarea')
            }
        }
        // Update task
        else {
            try {
                const updateTask = await fetch(`${baseURL}/tasks/${id}`, {
                    method: 'PUT',
                    credentials: 'include',
                    body: JSON.stringify(data)
                })
                updateTask.status === 200 ? router.push('/projects/tasks') : ''
                toast.success('Tarea editada exitosamente')
            } catch (error) {
                console.log(error)
                toast.error('No se ha podido editar la tarea')
            }
        }

        // When the form has been submitted, refresh the page to see the changes
        router.refresh()
    })

    return (
        <AppTasks params={{ id }}>

            <section className="flex justify-center items-center h-[calc(100vh-7rem)]">
                <div className=" bg-neutral-800 p-8 md:p-14 rounded-md w-[calc(100vw-3rem)] md:w-[calc(100vw-20rem)]">

                    <form onSubmit={onSubmit}>
                        <h2 className="text-2xl md:text-3xl mb-8">
                            {id ? 'Editar tarea' : 'Crear una tarea'}
                        </h2>

                        {errors.title && <ErrorMessage>Titulo requerido</ErrorMessage>}
                        <Label>Titulo</Label>
                        <input type="text" placeholder="Titulo de la tarea" id='title'
                            className="p-2 block my-3 w-full rounded-md bg-zinc-700 "
                            {...register('title', { required: true })} />


                        <Label>Descripción</Label>
                        <textarea rows={5} placeholder="Descripción de la tarea" id='description'
                            className="bg-zinc-700 p-2 block w-full my-3 rounded-md"
                            {...register('description')}>
                        </textarea>

                        <button type="submit"
                            className="w-full bg-sky-800 hover:bg-sky-600 hover:outline-2 hover:outline-sky-300 hover:ring-sky-300 duration-300 hover:ring-2 py-3 mt-3 rounded-md ">
                            {id ? 'Confirmar edición' : 'Crear tarea'}
                        </button>
                    </form>

                </div>
            </section>

        </AppTasks>
    )
}

export default TasksFormPage