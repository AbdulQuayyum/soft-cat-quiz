import React from 'react'

export default function ResultTable() {
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
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">qwertyuiop</td>
                        <td className="px-6 py-4">qwertyuiop</td>
                        <td className="px-6 py-4">qwertyuiop</td>
                        <td className="px-6 py-4">qwertyuiop</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
