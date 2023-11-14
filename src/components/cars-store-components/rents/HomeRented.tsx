import { prisma } from "@/libs/prisma";
import NavSelect from "./NavSelect";
import SectionsMyCars from "./SectionsMyCars";

export const HomeRented = async () => {
    const carsRented = await prisma.cars.findMany()

    return (
        <main className="relative w-screen h-full overflow-y-auto">
            <div className="h-full overflow-x-hidden bg-indigo-100">
                <section>
                    <NavSelect />
                </section>

                <section className="h-full">
                    <SectionsMyCars carsRented={carsRented} />
                </section>
            </div>
        </main>
    )
}

export default HomeRented