import { prisma } from "@/libs/prisma";
import RentedCarCard from "./RentedCarCard";
import NavSelect from "./NavSelect";

export async function HomeRented() {
    const carsRented = await prisma.cars.findMany()

    return (
        <main className="relative w-screen min-h-screen overflow-y-auto">
            <div className="h-full overflow-x-hidden w-screen bg-indigo-100">
                <section>
                    <NavSelect />
                </section>

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 h-full overflow-y-auto mb-[calc(10vh)]">
                        {carsRented.map((cars) => (
                            <div className="h-full w-full overflow-hidden">
                                <RentedCarCard car={cars} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HomeRented



//  "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10

//   min-h-screen overflow-y-auto mb-[calc(20vh)]"