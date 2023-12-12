import { Footer, HomeRented, Navbar } from '@/components'

async function page() {
    return (
        <div className='relative min-h-screen overflow-hidden bg-cars'>
            <Navbar />
            <HomeRented />
            <Footer />
        </div>
    )
}

export default page