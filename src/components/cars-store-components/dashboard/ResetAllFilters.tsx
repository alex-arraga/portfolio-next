"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

function ResetAllFilters() {
    const router = useRouter()
    const searchParams = new URLSearchParams(window.location.search)
    const keysToDelete: string[] = [];

    function resetAllFilters() {
        if (searchParams.keys().next().done) {
            toast.message('No filters have been applied');
        } else {
            searchParams.forEach((_value, key) => {
                keysToDelete.push(key);
            });

            keysToDelete.forEach(key => {
                searchParams.delete(key);
            });

            const clearPath = `${window.location.pathname}?${searchParams.toString()}`;
            router.push(clearPath);

            toast.success('You can see all cars again!');
        }
    }

    return (
        <>
            <button
                onClick={() => resetAllFilters()}
                className="w-full bg-indigo-200 hover:bg-indigo-300 duration-200 rounded-md text-black h-10 text-[12px] md:text-[14px]">
                Reset all filters
            </button>
        </>
    )
}

export default ResetAllFilters