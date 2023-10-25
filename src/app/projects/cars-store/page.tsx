import '@/css/cars-store.css'
import {
    Hero,
    Footer,
    Navbar,
    Home
} from "@/components"

function page() {
    return (
        <main className='overflow-hidden'>
            <Navbar />
            <Hero />
            <Home />
            <Footer />
        </main>
    )
}

export default page