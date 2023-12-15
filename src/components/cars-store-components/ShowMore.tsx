"use client"

import { ShowMoreProps } from "@/types/cars-store"
import { useRouter } from "next/navigation"
import { CustomButton } from ".."
import { updateSearchParams } from "@/app/utils"

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 9;
        const newPathName = updateSearchParams({ params: [{ type: 'limit', value: newLimit.toString() }] });

        router.push(newPathName)
    }


    return (
        <div className="flex justify-center w-full gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyle="bg-primary-blue text-white rounded-full"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore