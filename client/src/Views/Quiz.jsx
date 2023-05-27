import React from 'react'
import { Questions } from "../Components/Index"

const Quiz = () => {

    const onNext = () => { }
    const onPrev = () => { }

    return (
        <div className='container'>
            <div className='w-full flex justify-center'>
                <span className='text-3xl py-6'>Cat Quiz</span>
            </div>
            <div className='flex justify-center'>
                <Questions />
            </div>
            <div className='flex justify-between'>
                <button
                    onClick={onPrev}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Prev
                </button>
                <button
                    onClick={onNext}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Next
                </button>
            </div>

        </div>
    )
}

export default Quiz