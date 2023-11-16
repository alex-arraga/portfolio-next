import { MouseEventHandler } from "react";
import { Price } from "./payment";

export interface NavBarProps {
    otherClasses?: string
}

export interface FooterProps {
    otherClasses?: string
}

export interface CustomButtonProps {
    title: string,
    containerStyle?: string,
    textStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit',
    rightIcon?: string,
    priceId?: string,
    isPayButton?: boolean,
    urlPayAPI?: string
};

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void,
    styleSearchbar?: string
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

    rented?: boolean;
    liked?: boolean;
};

export interface CarDetailsProps {
    isOpen: boolean,
    closeModal: () => void,
    car: CarCardProps,
    styleDetails?: string,
    stripePrices: Price[]
}

export interface FilterProps {
    manufacturer?: string | null,
    model?: string | null,
    limit?: number | null,
    year?: number | null,
    fuel?: string | null,
    city_mpg?: number | null,
    highway_mpg?: number | null,
    transmission?: string | null,
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

export interface PriceFilterProps {
    minAutonomy: number,
    maxAutonomy: number
}

export interface TypesCars {
    classCars: string,
    classCounter: {
        [classes: string]: number
    }
    originalNameClasses?: string
}

export interface AsideComponentProps {
    allCars: any,
    searchParams: any
}

export interface searchBarProps {
    styleSearchbar?: string
}

export interface HamburgerMenuBarProps {
    handleClick: () => void,
    styleMenu?: string
    searchParams?: {
        year: number | string,
        manufacturer: string,
        model: string,
        transmission: string
    }
}

export interface RentedCarCardProps {
    id: number;
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;

    rented: boolean;
    liked: boolean;

    pay_method: string | null
    duration_rented: string | null
    created_at: string | Date;
}

export interface SectionsMyCarsProps {
    rentedCars: RentedCarCardProps[]
    stripePrices: Price[]
}

export interface EmptyDataMessageProps {
    searchParams?: FilterProps
    styleMessage?: string
}