import '@/css/history-scrollbar.css'

function HistoryContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className='scroll absolute overflow-auto text-start left-0 top-0 h-screen w-[calc(100vw-70rem)] bg-black bg-opacity-20 border-opacity-30 border-sky-200 border-r-2 p-5 scrol'>
            {children}
        </div>
    )
}

export default HistoryContainer