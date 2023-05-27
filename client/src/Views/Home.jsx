import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const inputRef = useRef(null)

    return (
        <div className=''>
            <div className="">
                <div className='w-full flex justify-center'>
                    <span className='text-3xl py-6'>Cat Quiz</span>
                </div>
                <ul className='flex flex-col gap-y-4'>
                    <li>&#11044; You will be asked 10 questions one after another.</li>
                    <li>&#11044; 10 points is awarded for the correct answer.</li>
                    <li>&#11044; Each question has three options. You can choose only one options.</li>
                    <li>&#11044; You can review and change answers before the quiz finish.</li>
                    <li>&#11044; The result will be declared at the end of the quiz.</li>
                </ul>

                <div className='my-6'>
                    <input
                        ref={inputRef}
                        type="text"
                        // value={firstAmount}
                        // onChange={e => setFirstAmount(e.target.value)}
                        placeholder="Username"
                        className="p-2 text-lg w-full rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>
                <div className='flex justify-center sm:justify-end'>
                    <Link
                        to={"Quiz"}
                        className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                        Start Quiz
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home