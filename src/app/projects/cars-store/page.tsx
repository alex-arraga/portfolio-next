import '@/css/cars-store.css'
import {
    Hero,
    Footer,
    Navbar
} from "@/components"

function page() {
    return (
        <main className='overflow-hidden'>
            <Navbar />
            <Hero />
            <Footer />
        </main>
    )
}

export default page