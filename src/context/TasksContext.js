"use client"

import { useHomeContext } from "./HomeContext";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { confirmToast } from "@/components/CustomToast";
import { toast } from "sonner";
import { useForm } from 'react-hook-form';
import { baseApiProjectsUrl } from "@/libs/baseURL";
import { usePathname } from "next/navigation";


// Create task context
export const TasksContext = createContext()


// Custumized hook to can use the context
export const useTasksContext = () => {
    const context = useContext(TasksContext)
    if (!context) {
        throw new Error('TaskContext must be inside of a context')
    } return context
}


// Provider
export const TasksProvider = ({ children }) => {
    const router = useRouter();
    const { handleSubmit } = useForm();
    const { getUserId, dataUser } = useHomeContext();

    // Hooks to save the data of inputs
    const [titleData, setTitleData] = useState('');
    const [descriptionData, setDescriptionData] = useState('');

    // Hooks to update a task
    const pathname = usePathname();
    const [idParam, setIdParam] = useState('');

    // If the user enters 'tasks/new' I reset the idParam hook to prevent the task from being updated instead of created
    useEffect(() => {
        let pathnameNewTask = window.location.pathname === '/projects/tasks/new'
        if (pathnameNewTask) {
            setIdParam('')
        }
    }, [pathname])


    // Get info from a task so that it can be updated
    const loadTask = async (id) => {
        const res = fetch(`${baseApiProjectsUrl}/tasks/${id}`, {
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
    };


    // Create & Update tasks
    const onSubmit = handleSubmit(async () => {
        const infoToSend = {
            title: titleData,
            description: descriptionData,
            user_id: await getUserId(),
            user_clerk: dataUser().id_clerk
        }

        // Create new task
        if (!idParam) {
            try {
                const createTask = await fetch(`${baseApiProjectsUrl}/tasks`, {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(infoToSend)
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
                const updateTask = await fetch(`${baseApiProjectsUrl}/tasks/${idParam}`, {
                    method: 'PUT',
                    credentials: 'include',
                    body: JSON.stringify(infoToSend)
                })

                setIdParam('')
                updateTask.status === 200 ? router.push('/projects/tasks') : ''
                toast.success('Tarea editada exitosamente')
            } catch (error) {
                console.log(error)
                toast.error('No se ha podido editar la tarea')
            }
        }

        // When the form has been submitted, refresh the page to see the changes
        router.refresh()
    });


    // Delete a pendient task
    const deleteTask = async (e, task) => {
        e.stopPropagation();
        try {
            const confirm = await confirmToast('¿Confirma que quiere eliminar la tarea pendiente?')
            if (confirm) {
                await fetch(`${baseApiProjectsUrl}/tasks/${task.id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                })

                toast.success('Tarea eliminada con exito')
            }
        } catch (error) {
            console.log(error)
            toast.error('No se ha podido eliminar la tarea')
        }
        router.refresh()
    };


    // Delete completed task
    const deleteCompletedTask = async (e, task) => {
        e.stopPropagation();
        try {
            const confirm = await confirmToast('¿Confirma que quiere eliminar la tarea completada?')
            if (confirm) {
                await fetch(`${baseApiProjectsUrl}/tasks/completed/${task.id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                })

                toast.success('Se ha eliminado la tarea completada')
            }
        } catch (error) {
            console.log(error)
            toast.error('No se ha podido eliminar la tarea')
        }
        router.refresh()
    };


    // On click en check button, create completed task
    const createCompletedTask = async (e, task) => {
        e.stopPropagation()

        try {
            await fetch(`${baseApiProjectsUrl}/tasks/completed`, {
                method: 'POST',
                body: JSON.stringify(task),
                credentials: 'include'
            })

            await fetch(`${baseApiProjectsUrl}/tasks/${task.id}`, {
                method: 'DELETE',
                credentials: 'include'
            })

            toast.success('Tarea añadida a "Completadas" con éxito')
        } catch (error) {
            console.log(error)
            toast.error('No se ha podido completar su tarea')
        }

        router.refresh()
    };


    return <TasksContext.Provider value={{
        loadTask,
        onSubmit,
        setDescriptionData,
        setTitleData,
        deleteTask,
        deleteCompletedTask,
        createCompletedTask,
        idParam,
        setIdParam,
    }}>
        {children}
    </TasksContext.Provider>
}