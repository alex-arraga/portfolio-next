import { myHost } from "@/libs/baseURL";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <main className="bg-home">
            <section className='bg-[url("/bg-main-blur-30.png")] relative flex flex-col justify-start items-center w-full h-screen max-w-screen max-h-screen'>
                <div className="flex justify-center items-center w-full h-full">
                    <SignUp afterSignUpUrl='/sign-in' routing="path" path="/sign-up" />
                </div>
            </section>
        </main>
    )
}