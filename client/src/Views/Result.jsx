import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { ResultTable } from "../Components/Index"
import { ResetAllAction } from '../Redux/QuestionReducer';
import { ResetResultAction } from '../Redux/ResultReducer';
import { UsePublishResult } from '../Utilities/SetResult';

const Result = () => {
    const dispatch = useDispatch()

    const onRestart = () => {
        dispatch(ResetAllAction())
        dispatch(ResetResultAction())
    }

    return (
        <div>
            <div className='w-full flex justify-center'>
                <span className='text-3xl py-6'>Cat Quiz</span>
            </div>
            <div className='flex flex-col border border-black justify-between w-full md:w-[550px] px-6 sm:px-10 py-10 mb-10 rounded-2xl pt-2 sm:pt-6 pb-10'>
                <div className="flex justify-between">
                    <span>Username :</span>
                    <span>qwerrtyuiop</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Quiz Points :</span>
                    <span>qwerrtyuiop</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Questions :</span>
                    <span>qwerrtyuiop</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Attempts :</span>
                    <span>qwerrtyuiop</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Earn Points :</span>
                    <span>qwerrtyuiop</span>
                </div>
                <div className="flex justify-between">
                    <span>Quiz Result :</span>
                    <span>qwerrtyuiop</span>
                </div>
            </div>
            <div className='mb-10 flex justify-center sm:justify-end'>
                <Link
                    to={"/"}
                    onClick={onRestart}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Restart
                </Link>
            </div>
            <div>
                <ResultTable />
            </div>
        </div>
    )
}

export default Result