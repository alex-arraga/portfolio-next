"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Listbox, Transition } from "@headlessui/react"
import { CustomFilterProps } from "@/types/cars-store-types"
import { updateSearchParams } from "@/app/utils"

function CustomFilter({ title, options }: CustomFilterProps) {
    const [selected, setSelected] = useState(options[0])
    const router = useRouter()

    const handleUpdateParams = (e: { title: string, value: string }) => {
        const newPathName = updateSearchParams({ params: [{ type: title, value: e.value.toLocaleLowerCase() }] })

        router.push(newPathName)
    }

    return (
        <div className="w-fit">

            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                    handleUpdateParams(e);
                }}
            >
                <div className="relative w-fit">
                    <Listbox.Button className='custom-filter__btn'>
                        <span className="block truncate">{selected.title}</span>
                        <Image
                            src={"/chevron-up-down.svg"}
                            alt="arrow option icon"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className={"custom-filter__options"}>
                            {
                                options.map((option) => (
                                    <Listbox.Option
                                        key={option.title}
                                        value={option}
                                        className={({ active }) => `relative cursor-pointer py-2 px-4 z-10 ${active ? 'bg-primary-blue text-white' : 'text-gray-900 bg-white'}`}
                                    >
                                        {({ selected }) => (
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                {option.title}
                                            </span>
                                        )}
                                    </Listbox.Option>
                                ))
                            }
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>

        </div>
    )
}

export default CustomFilter