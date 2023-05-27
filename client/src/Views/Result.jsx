import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Result = () => {
    const onRestart = () => { }

    return (
        <div>
            <div className='w-full flex justify-center'>
                <span className='text-3xl py-6'>Cat Quiz</span>
            </div>
            <div className='flex flex-col justify-center'>
                <div className="flex">
                    <span>Username :</span>
                    <span>qwerrtyuiop</span>
                </div>
                <div className="flex">
                    <span>Total Quiz Points :</span>
                    <span>qwerrtyuiop</span>
                </div>
                <div className="flex">
                    <span>Total Questions :</span>
                    <span>qwerrtyuiop</span>
                </div>
                <div className="flex">
                    <span>Total Attempts :</span>
                    <span>qwerrtyuiop</span>
                </div>
                <div className="flex">
                    <span>Total Earn Points :</span>
                    <span>qwerrtyuiop</span>
                </div>
                <div className="flex">
                    <span>Quiz Result :</span>
                    <span>qwerrtyuiop</span>
                </div>
            </div>
            <div>
                <Link
                    to={"/"}
                    onClick={onRestart}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Restart
                </Link>
            </div>
        </div>
    )
}

export default Result