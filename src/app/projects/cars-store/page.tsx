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
            <Navbar />
            <Hero />
            <Home searchParams={searchParams} />
            <Footer />
        </main>
    )
}

export default page