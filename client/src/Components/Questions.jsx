import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import Dummy from '../Data/Dummy'
import { UseFetchQuestion } from '../Utilities/FetchQuestion'
import { UpdateResult } from '../Utilities/SetResult'

export default function Questions({ onChecked }) {
    // console.log(Dummy)
    const [selectedOption, setSelectedOption] = useState('')
    const [Checked, setChecked] = useState(undefined)
    const { Trace } = useSelector(state => state.Questions)
    const Result = useSelector(state => state.Result.Result)
    const [{ IsLoading, APIData, ServerError }] = UseFetchQuestion()

    const Questions = useSelector(state => state.Questions.Queue[state.Questions.Trace])
    const dispatch = useDispatch()

    // const Questions = Dummy[0]

    // useEffect(() => {
    // console.log(selectedOption)
    // console.log(Questions)
    // console.log(IsLoading)
    // console.log(APIData)
    // console.log(ServerError)
    // }, [selectedOption])

    useEffect(() => {
        dispatch(UpdateResult({ Trace, Checked }))
    }, [Checked])

    const onSelect = (index) => {
        onChecked(index)
        setSelectedOption(index)
        setChecked(index)
        dispatch(UpdateResult({ Trace, Checked }))
    }

    if (IsLoading) return <h3 className=''>isLoading</h3>
    if (ServerError) return <h3 className=''>{ServerError || "Unknown Error"}</h3>

    return (
        <div className=''>
            <div>
                <div className='w-full flex flex-col justify-center'>
                    <div className='py-4'>
                        <span className='text-xl sm:text-3xl py-0 sm:py-6'>{Questions?.id}.   {Questions?.Question}</span>
                    </div>
                    <div className='pt-2 sm:pt-6 pb-10'>
                        <ul key={Questions?.id} className='flex gap-y-4 flex-col'>
                            {
                                Questions?.Options.map((Questions, index) => (
                                    <li key={index} className='flex cursor-pointer' >
                                        <input
                                            id={`Question${index}-option`}
                                            onChange={() => onSelect(index)}
                                            type="radio"
                                            value={index}
                                            // checked={Result[Trace] === index}
                                            name="option"
                                            className="w-6 h-6 cursor-pointer bg-white accent-black border-gray-300 outline-none" />
                                        <label
                                            htmlFor={`Question${index}-option`}
                                            className="ml-2 text-base sm:text-lg cursor-pointer font-medium text-black dark:text-gray-300">
                                            {Questions}
                                        </label>
                                        {
                                            Result[Trace] === index ?
                                                <div className='ml-4'>
                                                    &#x2190; Your Choice
                                                </div>
                                                : <div></div>
                                        }

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
