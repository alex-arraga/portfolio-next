import { Aside, Navbar, Dashboard } from '@/components'
import { HomeProps } from '@/types/cars-store'

function page({ searchParams }: HomeProps) {
    return (
        <div className='max-h-screen overflow-hidden'>
            <Navbar otherClasses='bg-white relative border-b-2 border-gray-200' />
            <Aside searchParams={searchParams} />
            <Dashboard searchParams={searchParams} />
        </div>
    )
}

export default page