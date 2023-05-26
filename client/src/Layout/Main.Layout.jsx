import React from 'react'
import { Footer, Navbar } from "../Components/Index"

export default function MainLayout(props) {
    const { children } = props

    return (
        <div className='relative z-10 min-h-screen flex justify-between items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
