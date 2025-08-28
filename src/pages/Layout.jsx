import React from 'react'
import Header from '../components/Header'
import { Outlet, Routes } from 'react-router-dom'
import { Route } from 'lucide-react'
import Footer from '../components/Footer'
import FloatingEmbed from '../components/FloatingEmbed'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <FloatingEmbed />
            <Footer />
        </>
    )
}

export default Layout