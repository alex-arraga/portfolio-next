export function LoadingPage(className: string) {
    return (
        <div className="flex justify-center items-center h-[calc(100vh)]">
            <h2 className={`text-2xl font-medium text-white ${className}`}>
                Cargando...
            </h2>
        </div>
    )
}

export default LoadingPage