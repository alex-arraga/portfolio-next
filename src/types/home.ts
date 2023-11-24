export interface BoxProps {
    children: React.ReactNode
    className?: string
    type?: string
}

export interface PillsProps {
    urlImage: string
    title: string
    text: string
    altImage: string
    className?: string
    styleImage?: string
    urlClick?: string
    type?: string
    urlIcon?: string
    altIcon?: string
    styleIcon?: string
    relevantDescription?: string
    section?: boolean
}

export interface ContainerBoxesProps {
    children: React.ReactNode
    className?: string
    type?: string
}

export interface ShowImages {
    image: string
}