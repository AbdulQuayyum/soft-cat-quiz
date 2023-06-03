import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { AttemptsNumber, EarnPointsNumber, FlagResult } from '../Utilities/Helper';
import { ResultTable } from "../Components/Index"
import { ResetAllAction } from '../Redux/QuestionReducer';
import { ResetResultAction } from '../Redux/ResultReducer';
import { UsePublishResult } from '../Utilities/SetResult';

const Result = () => {
    const dispatch = useDispatch()
    const { Questions: { Queue, Answers }, Result: { Result, UserID } } = useSelector(state => state)

    // useEffect(() => {
    //     console.log(Result)
    // })

    const TotalPoints = Queue.length * 10
    const Attempts = AttemptsNumber(Result)
    const EarnPoints = EarnPointsNumber(Result, Answers, 10)
    const Flag = FlagResult(TotalPoints, EarnPoints)

    UsePublishResult({ Result, UserName: UserID, Attempts, Points: EarnPoints, Achieved: Flag ? "Passed" : "Failed" })

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
                    <span>{UserID || ""}</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Quiz Points :</span>
                    <span>{TotalPoints || 0}</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Questions :</span>
                    <span>{Queue.length || 0}</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Attempts :</span>
                    <span>{Attempts || 0}</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Earn Points :</span>
                    <span>{EarnPoints || 0}</span>
                </div>
                <div className="flex justify-between">
                    <span>Quiz Result :</span>
                    <span style={{ color: `${Flag ? "#2aff95" : "#ff2a66"}` }} >{Flag ? "Passed" : "Failed"}</span>
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