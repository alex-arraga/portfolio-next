"use client"

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

function NewTaskPage({ params }: { params: { id: String } }) {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const router = useRouter()

    // Recover information about specific task
    const loadTask = () => {
        const res = fetch(`http://localhost:3000/api/tasks/${params.id}`, {
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
        if (params.id) {
            loadTask()
                .then(res => {
                    setValue('title', res.title)
                    setValue('description', res.description)
                })
        }
    }, [])


    const onSubmit = handleSubmit(async (data) => {
        // Create new task
        if (!params.id) {
            const res = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data)
            })
            res.status === 200 ? router.push('/tasks') : ''
        }
        // Update task
        else {
            const res = await fetch(`http://localhost:3000/api/tasks/${params.id}`, {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(data)
            })
            res.status === 200 ? router.push('/tasks') : ''
        }

        // When the form has been submitted, refresh the page to see the changes
        router.refresh()
    })

    return (
        <section className="flex justify-center items-center h-[calc(100vh-7rem)]">
            <div className=" bg-neutral-800 p-14 rounded-md w-[calc(100vw-20rem)]">
                <form onSubmit={onSubmit}>
                    <h2 className="text-3xl mb-8">
                        {params.id ? 'Editar tarea' : 'Crear una tarea'}
                    </h2>

                    <label className='text-sm text-white'>Titulo</label>
                    <input type="text" placeholder="Titulo de la tarea" id='title'
                        className="p-2 block my-3 w-full rounded-md bg-zinc-700 "
                        {...register('title', { required: true })}
                    />

                    <label className='text-sm text-white'>Descripción</label>
                    <textarea rows={5} placeholder="Descripción de la tarea" id='description'
                        className="bg-zinc-700 p-2 block w-full my-3 rounded-md"
                        {...register('description')}>
                    </textarea>

                    <button type="submit"
                        className="w-full bg-sky-800 hover:bg-sky-600 hover:outline-2 hover:outline-sky-300 hover:ring-sky-300 duration-300 hover:ring-2 py-3 mt-3 rounded-md ">
                        {params.id ? 'Confirmar edición' : 'Crear tarea'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default NewTaskPage