import HistoryContainer from './HistoryContainer'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { prisma } from '@/libs/prisma';

const loadOperations = async () => {
    const response = await prisma.calculator.findMany()
    return response
}

async function History({ params }: { params: { id: string | number } }) {
    const operations = await loadOperations();
    const date = new Date().toLocaleDateString()

    return (
        <HistoryContainer>
            <h2 className='flex justify-center text-xl mb-5 font-semibold text-sky-100'>Historial de Operaciones</h2>
            <button className='flex justify-center w-full py-1.5 rounded-xl sticky cursor-pointer mb-5 bg-slate-800'>Borrar Historial</button>
            <hr className='mb-5 opacity-50' />

            <h3 className='flex w-full justify-center items-center mb-5 text-sm opacity-50'>{date}</h3>

            {
                operations.length === 0 ?
                    <div className='flex justify-center items-center h-[calc(100vh-20rem)] opacity-50'>No hay operaciones</div>

                    :
                    operations.sort((a, b) => b.id - a.id).map(operation =>
                        <div key={operation.id} className='bg-sky-900 w-full h-28 rounded-md p-3 mb-5'>
                            <div className='flex justify-between items-center'>
                                <p className='text-xs text-gray-200'>{operation.created_at.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                <AiOutlineCloseCircle className='text-red-300 cursor-pointer hover:text-red-500 duration-300' />
                            </div>

                            <hr className='opacity-40 my-3' />

                            <h4 className='text-sm mb-1'><span className='font-semibold cursor-pointer hover:text-fuchsia-300 hover:underline duration-300'>Exp: </span>{operation.expression}</h4>
                            <h4 className='text-sm'><span className='font-semibold cursor-pointer hover:text-fuchsia-300 hover:underline duration-300'>Res: </span>{operation.result}</h4>
                        </div>
                    )
            }
        </HistoryContainer>

    )
}

export default History

/*
*/