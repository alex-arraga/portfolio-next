import HistoryContainer from './HistoryContainer'
import { OperationCard } from './OperationCard';
import { currentUser } from '@clerk/nextjs';
import { prisma } from '@/libs/prisma';


async function History() {
    const user = await currentUser();

    const loadOperations = async () => {
        const allOperations = await prisma.calculator.findMany({
            where: {
                user_clerk: user?.id
            }
        })
        await prisma.$disconnect()
        return allOperations
    }

    const operations = await loadOperations()

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