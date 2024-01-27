import React, { MouseEventHandler } from "react";
import { Price } from "./payment-types";


export type UpdateSearchParamsProps = {
    params: { type: string; value: string; }[];
}

export type DeleteParamProps = {
    param: string,
    value?: string,
}

export type NavBarProps = {
    secondNav?: React.ReactNode
    isDashboard?: boolean
    otherClasses?: string
    isStatic?: boolean
    hamburgerParams?: {
        year: number | null | undefined,
        manufacturer: string | null | undefined,
        model: string | null | undefined,
        transmission: string | null | undefined
    }
    openModal?: () => void
}

export type FooterProps = {
    otherClasses?: string
}

export type CustomButtonProps = {
    title: string,
    containerStyle?: string,
    totalCustom?: boolean
    textStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit',
    rightIcon?: string,
    leftIcon?: string,
    styleLeftIcon?: string,
    styleRightIcon?: string,
    isResetButton?: boolean
};

export type SearchManufacturerProps = {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void,
    styleSearchbar?: string
}

export type CarCardProps = {
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

    car_id?: string,
    rented?: boolean;
    liked?: boolean;
};

export type CarDetailsProps = {
    isOpen: boolean,
    closeModal: () => void,
    car: CarCardProps,
    styleDetails?: string,
    stripePrices?: Price[]
}

export type FilterProps = {
    manufacturer?: string | null,
    model?: string | null,
    limit?: number | null,
    year?: number | null,
    fuel?: string | null,
    city_mpg?: number | null,
    highway_mpg?: number | null,
    transmission?: string | null,
}

export type HomeProps = {
    searchParams: FilterProps,
}

export type OptionProps = {
    title: string,
    value: string
}

export type CustomFilterProps = {
    title: string,
    options: OptionProps[]
}

export type ShowMoreProps = {
    pageNumber: number,
    isNext: boolean
}

export type PriceFilterProps = {
    minAutonomy: number,
    maxAutonomy: number
}

export type TypesCars = {
    classCars: string,
    classCounter: {
        [classes: string]: number
    }
    originalNameClasses?: string
}

export type AsideProps = {
    searchParams: FilterProps
}

export type DashboardProps = {
    allCars: CarCardProps[],
    searchParams: FilterProps
}

export type searchBarProps = {
    styleSearchbar?: string
}

export type HamburgerMenuBarProps = {
    handleClick: () => void,
    styleMenu?: string
    searchParams?: {
        year: number | null | undefined,
        manufacturer: string | null | undefined,
        model: string | null | undefined,
        transmission: string | null | undefined
    }
}

export type RentedCarCardProps = {
    id: number;
    car_id: string,
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
    order_id?: string | null
    created_at?: string | Date;
}

export type SectionsMyCarsProps = {
    rentedCars: RentedCarCardProps[]
    likedCars: RentedCarCardProps[]
    stripePrices: Price[]
}

export type EmptyDataMessageProps = {
    searchParams?: FilterProps
    styleMessage?: string
}

export type DataNewCar = {
    id?: number,
    car_id: string,
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

    liked?: boolean
    rented?: boolean;

    order_id?: string | null
    user_id: () => Promise<any>,
    user_clerk?: string | null
}