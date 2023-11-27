import { Login } from '@/components/index'

function page() {
    return (
        <main className='bg-home'>
            <section className='bg-[url("/bg-main-blur-30.png")] relative flex flex-col justify-start items-center w-full h-screen max-w-screen max-h-screen'>
                <Login />
            </section>
        </main>
    )
}

export default page