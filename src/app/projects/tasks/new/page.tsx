"use client"

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { baseAPIProjectsURL } from '@/libs/baseURL';
import { useTasksContext } from '@/context/TasksContext';

import { ErrorMessage } from '@/components/ErrorMessage';
import { Label } from '@/components/Label';
import { AppTasks } from '@/components/tasks-components/AppTasks/AppTasks'

function NewTaskPage({ params }: { params: { id: string } }) {
    const { register, setValue, getValues, formState: { errors } } = useForm()
    const { loadTask, onSubmit, setDescriptionData, setTitleData, setIdParam } = useTasksContext()
    const { id } = params;

    // Get info of the inputs to can edit them
    useEffect(() => {
        if (id) {
            setIdParam(id)
            loadTask(id)
                .then((res: { title: string; description: string; }) => {
                    setValue('title', res.title)
                    setValue('description', res.description)
                })
        }
    }, [])

    return (
        <AppTasks params={{ id }}>

            <section className="flex justify-center items-center h-[calc(100vh-7rem)]">
                <div className=" bg-neutral-800 p-8 md:p-14 rounded-md w-[calc(100vw-3rem)] md:w-[calc(100vw-20rem)]">

                    <form onSubmit={onSubmit}>
                        <h2 className="text-2xl md:text-3xl mb-8">
                            {id ? 'Editar tarea' : 'Crear una tarea'}
                        </h2>

                        {errors.title && <ErrorMessage>Titulo requerido</ErrorMessage>}
                        <Label title='Titulo' />
                        <input type="text" placeholder="Titulo de la tarea" id='title'
                            className="p-2 block my-3 w-full rounded-md bg-zinc-700 "
                            {...register('title', { required: true })} />


                        <Label title='Descripción' />
                        <textarea rows={5} placeholder="Descripción de la tarea" id='description'
                            className="bg-zinc-700 p-2 block w-full my-3 rounded-md"
                            {...register('description')}>
                        </textarea>

                        <button type="submit"
                            onClick={() => {
                                let title = getValues('title');
                                let description = getValues('description');

                                setTitleData(title)
                                setDescriptionData(description)
                            }}
                            className="w-full bg-sky-800 hover:bg-sky-600 hover:outline-2 hover:outline-sky-300 hover:ring-sky-300 duration-300 hover:ring-2 py-3 mt-3 rounded-md ">
                            {id ? 'Confirmar edición' : 'Crear tarea'}
                        </button>
                    </form>

                </div>
            </section>

        </AppTasks>
    )
}

export default NewTaskPage