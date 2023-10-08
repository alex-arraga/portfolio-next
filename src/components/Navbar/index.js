import { MdPostAdd } from 'react-icons/md';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';

export const privateRoutes = [
    {
        name: 'Tareas',
        path: '/tasks',
        icon: <HiOutlineClipboardDocumentList className='text-white' />
    },
    {
        name: 'Crear tarea',
        path: '/new',
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