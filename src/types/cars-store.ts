import { MouseEventHandler } from "react";
import { Price } from "./payment";

export interface UpdateSearchParamsProps {
    params: { type: string; value: string; }[];
}

export interface DeleteParamProps {
    param: string,
    value?: string,
}


export interface NavBarProps {
    otherClasses?: string
    isStatic?: boolean
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
    leftIcon?: string,
    priceId?: string,
    infoPreferenceMp?: {
        payment_method_id?: string,
        carName: string,
        picture_url?: string,
        description: string,
        quantity: number,
        unit_price: number
    },
    isPayButton?: boolean,
    isResetButton?: boolean
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
    stripePrices?: Price[]
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
    searchParams: FilterProps,
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

export interface AsideProps {
    searchParams: FilterProps
}

export interface DashboardProps {
    allCars: CarCardProps[],
    searchParams: FilterProps
}

export interface searchBarProps {
    styleSearchbar?: string
}

export interface HamburgerMenuBarProps {
    handleClick: () => void,
    styleMenu?: string
    searchParams?: {
        year: number | null | undefined,
        manufacturer: string | null | undefined,
        model: string | null | undefined,
        transmission: string | null | undefined
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