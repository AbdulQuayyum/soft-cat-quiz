import React, { useEffect, useState } from 'react'

import { GetServerData } from "../Utilities/Helper"

export default function ResultTable() {
    const [data, setData] = useState([])

    useEffect(() => {
        GetServerData(`${import.meta.env.VITE_SERVER_URL}/v1/Result`, (res) => {
            setData(res)
        })
    })

    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">Attempts</th>
                        <th scope="col" className="px-6 py-4">Earn Points</th>
                        <th scope="col" className="px-6 py-4">Results</th>
                    </tr>
                </thead>
                <tbody>
                    {!data ?? <div>No Data Found </div>}
                    {data.map((Result, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{Result?.UserName || ''}</td>
                            <td className="px-6 py-4">{Result?.Attempts || 0}</td>
                            <td className="px-6 py-4">{Result?.Points || 0}</td>
                            <td className="px-6 py-4">{Result?.Achieved || ''}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
