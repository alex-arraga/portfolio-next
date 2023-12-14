import Image from 'next/image';

export const privateRoutes = [
    {
        name: 'Tareas',
        path: '/projects/tasks',
        icon: <Image src={'/pendient-task.svg'}
            alt='tasks'
            width={20}
            height={20}
            className='object-contain sm:h-5 sm:w-5'
        />
    },
    {
        name: 'Completadas',
        path: '/projects/tasks/completed',
        icon: <Image src={'/completed-task.svg'}
            alt='tasks'
            width={20}
            height={20}
            className='object-contain sm:h-5 sm:w-5'
        />
    },
    {
        name: 'Crear tarea',
        path: '/projects/tasks/new',
        icon: <Image src={'/new-task.svg'}
            alt='tasks'
            width={20}
            height={20}
            className='object-contain sm:h-5 sm:w-5'
        />
    },
]

export const publicRoutes = [
    {
        name: 'Registrate',
        path: '/signup'
    },
    {
        name: 'Ingresar',
        path: '/signin'
    },
]