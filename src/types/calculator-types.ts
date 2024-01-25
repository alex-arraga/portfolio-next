export type Operation = {
    id: number;
    expression: string;
    result: string;
    created_at: Date;
}

export type KeyboardProps = {
    showValue: (value: string) => void,
    deleteAValue: () => void,
    changeSymbol: () => void,
    calc: () => void,
    getLastResult: () => void
}