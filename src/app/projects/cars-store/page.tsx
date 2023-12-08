import '@/css/cars-store.css'

import {
    Hero,
    Footer,
    Navbar,
    Home
} from "@/components"

function page({ searchParams }: any) {
    return (
        <main className='overflow-hidden'>
            <Navbar isStatic={true} />
            <Hero />
            <Home searchParams={searchParams} />
            <Footer otherClasses='mt-5' />
        </main>
    )
}

export default page