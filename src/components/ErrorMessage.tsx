export function ErrorMessage({ children }: { children: string }) {
    return (
        <p className='text-red-400 text-xs pb-2'>{children}</p>)
}

export default ErrorMessage