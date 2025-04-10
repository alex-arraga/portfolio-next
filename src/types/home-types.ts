export type BoxProps = {
    children: React.ReactNode
    className?: string
    type?: string
}

export type ProjectsCardProps = {
    github_repo?: string
    urlImage: string
    title: string
    text: string
    altImage: string
    className?: string
    styleImage?: string
    urlClick?: string
    type?: string
    tags?: string[]
    urlIcon?: string
    altIcon?: string
    styleIcon?: string
    relevantDescription?: string
    section?: boolean
}

export type ContainerBoxesProps = {
    children: React.ReactNode
    className?: string
    type?: string
}

export type ShowImages = {
    image: string
}