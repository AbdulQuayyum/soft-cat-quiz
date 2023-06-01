import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { MoveNextQuestion, MovePrevQuestion } from '../Utilities/FetchQuestion'
import { PushAnswer } from '../Utilities/SetResult'
import { Questions } from "../Components/Index"

const Quiz = () => {
    const [check, setChecked] = useState(undefined)

    const state = useSelector(state => state)
    const Result = useSelector(state => state.Result.Result)
    const { Queue, Trace } = useSelector(state => state.Questions)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(state)
        // console.log(Queue)
        // console.log(Trace)
    })

    const onChecked = (check) => { setChecked(check) }

    const onNext = () => {
        if (Trace < Queue.length) {
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            dispatch(PushAnswer(1))
            /** insert a new result in the array.  */
            // if (Result.length <= Trace) {
            //     dispatch(PushAnswer(check))
            // }
        }

        /** reset the value of the checked variable */
        setChecked(undefined)
    }

    const onPrev = () => {
        if (Trace > 0) {
            dispatch(MovePrevQuestion())
        }
    }

    if (Result.length && Result.length >= Queue.length) {
        return <Navigate to={'/Result'} replace={true} />
    }

    return (
        <div className=''>
            <div className='w-full flex justify-center'>
                <span className='text-3xl py-6'>Cat Quiz</span>
            </div>
            <div className='flex justify-center'>
                <Questions onChecked={onChecked} />
            </div>
            <div className='flex justify-between'>
                {
                    Trace > 0 ?
                        <button onClick={onPrev}
                            className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                            Prev
                        </button>
                        : <div></div>
                }
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