import { AsideFilters, Navbar, Footer } from '@/components'

function page() {
    return (
        <div>
            <Navbar otherClasses='bg-white relative border-b-2 border-gray-200' />
            <AsideFilters />
            <Footer />
        </div>
    )
}

export default page