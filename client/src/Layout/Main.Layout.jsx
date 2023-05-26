import React from 'react'
import { Footer, Navbar } from "../Components/Index"

export default function MainLayout(props) {
    const { children } = props

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
