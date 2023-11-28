import { Login } from '@/components/index'

function page() {
    return (
        <main className='bg-home min-h-screen h-full'>
            <section className='bg-[url("/bg-main-blur-30.png")] relative flex flex-col justify-start items-center w-full h-full min-h-screen max-w-screen'>
                <Login />
            </section>
        </main>
    )
}

export default page