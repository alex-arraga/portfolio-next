import React from 'react'
import { CustomFilter, SearchBar } from '..'


function Home() {
    return (
        <div className='mt-12 padding-x padding-y max-width' id='discover'>

            <div className='home__text-container'>
                <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
                <p>Explore the cars yout might like</p>
            </div>

            <div className='home__filters'>
                <SearchBar />

                <div className='home_filter-container'>
                    <CustomFilter title="fuel" />
                    <CustomFilter title="year" />
                </div>

            </div>
        </div>
    )
}

export default Home