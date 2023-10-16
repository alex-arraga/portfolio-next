import React from 'react'

export function Screen({ value }: { value: string }) {

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault();
    };

    return (
        <form className='flex justify-end items-center'
            onSubmit={() => handleSubmit}>
            <input className='flex justify-end items-center px-3 h-10 rounded-md w-full text-2xl my-5 overflow-auto bg-slate-950 text-right'
                placeholder='0'
                type='text'
                readOnly
                value={value}>
            </input>
        </form>
    )
}

export default Screen

/*
.pantalla {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
    height: 80px;
    width: 380px;
    border-radius: 10px;
    margin: 20px 0px;
    font-size: 2.2em;
    overflow: overlay;
    letter-spacing: 1px;
    font-weight: 400;
    text-align: right;
}

@media (prefers-color-scheme: dark) {
    .pantalla {
        background-color: #0a0a0a;
        color: #ffffff;
        border: 2px solid rgb(60, 60, 60);
    }
}
*/