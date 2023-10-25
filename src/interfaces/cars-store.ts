import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit'
};

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void
}