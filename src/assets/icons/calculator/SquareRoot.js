import * as React from "react"
const SquareRoot = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        className="icon icon-tabler icon-tabler-square-root-2"
        {...props}
    >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M13 12h1c1 0 1 1 2.016 3.527C17 18 17 19 18 19h1" />
        <path d="M12 19c1.5 0 3-2 4-3.5s2.5-3.5 4-3.5M3 12h1l3 8 3-16h10" />
    </svg>
)
export default SquareRoot