export interface Operation {
    id: number;
    expression: string;
    result: string;
    created_at: Date;
}

export interface KeyboardProps {
    showValue: (value: string) => void,
    deleteAValue: () => void,
    changeSymbol: () => void,
    calc: () => void,
    getLastResult: () => void
}