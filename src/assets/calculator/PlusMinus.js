import * as React from "react"
const PlusMinus = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        className="icon icon-tabler icon-tabler-plus-minus"
        {...props}
    >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M4 7h6M7 4v6M20 18h-6M5 19 19 5" />
    </svg>
)
export default PlusMinus