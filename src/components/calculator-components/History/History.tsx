import HistoryContainer from './HistoryContainer'
import { prisma } from '@/libs/prisma';
import { OperationCard } from './OperationCard';

const loadOperations = async () => {
    const response = await prisma.calculator.findMany()
    return response
}

async function History() {
    const operations = await loadOperations();

    return (
        <HistoryContainer>
            {
                operations.length === 0 ?
                    <div className='flex justify-center items-center h-[calc(100vh-20rem)] opacity-50'>No hay operaciones</div>

                    : operations.sort((a, b) => b.id - a.id).map(operation =>
                        <OperationCard
                            operation={operation}
                            key={operation.id}
                        />
                    )
            }
        </HistoryContainer>

    )
}

export default History

/*
*/