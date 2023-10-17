import * as React from "react"
const Powers = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        className="icon icon-tabler icon-tabler-superscript"
        {...props}
    >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="m5 7 8 10m-8 0 8-10M21 11h-4l3.5-4A1.73 1.73 0 0 0 17 5" />
    </svg>
)
export default Powers