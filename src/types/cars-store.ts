import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyle?: string,
    textStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit',
    rightIcon?: string
};

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void
}

export interface CarCardProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
};

export interface CarDetailsProps {
    isOpen: boolean,
    closeModal: () => void,
    car: CarCardProps
}

export interface FilterProps {
    manufacturer?: string,
    model?: string,
    limit?: number,
    year?: number,
    fuel?: string,
}

export interface HomeProps {
    searchParams: FilterProps
}

export interface OptionProps {
    title: string,
    value: string
}

export interface CustomFilterProps {
    title: string,
    options: OptionProps[]
}

export interface ShowMoreProps {
    pageNumber: number,
    isNext: boolean
}