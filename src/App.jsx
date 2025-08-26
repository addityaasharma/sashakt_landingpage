import React from 'react'
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingEmbed from './components/FloatingEmbed'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <>
      <Header />
      {/* <LandingPage /> */}
      <HomePage />
      <FloatingEmbed />
      <Footer />
    </>
  )
}

export default App