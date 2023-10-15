import { MdPostAdd } from 'react-icons/md';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { BsClipboardCheck } from 'react-icons/bs'

export const privateRoutes = [
    {
        name: 'Tareas',
        path: '/projects/tasks',
        icon: <HiOutlineClipboardDocumentList className='text-white' />
    },
    {
        name: 'Completadas',
        path: '/projects/tasks/completed',
        icon: <BsClipboardCheck className='text-white' />
    },
    {
        name: 'Crear tarea',
        path: '/projects/tasks/new',
        icon: <MdPostAdd className='text-white' />
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