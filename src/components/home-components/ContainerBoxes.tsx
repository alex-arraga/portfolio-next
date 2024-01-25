import { ContainerBoxesProps } from "@/types/home-types"

function ContainerBoxes({ children, className }: ContainerBoxesProps) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default ContainerBoxes