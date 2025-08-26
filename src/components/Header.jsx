import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react' // using lucide icons for hamburger

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="h-[80px] w-full bg-[#283646] flex items-center px-6 relative">
      <div className="h-[60px] w-[60px] flex-shrink-0">
        <img src={logo} alt="logo" className="h-full w-full object-contain" />
      </div>

      <div className="flex-1 hidden md:flex justify-center">
        <nav className="flex w-[400px] justify-between text-white text-lg font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>

      <div className="md:hidden ml-auto">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#283646] flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#" className="text-white text-lg" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="text-white text-lg" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" className="text-white text-lg" onClick={() => setIsOpen(false)}>Blog</a>
          <a href="#" className="text-white text-lg" onClick={() => setIsOpen(false)}>Contact Us</a>
        </div>
      )}
    </header>
  )
}

export default Header
