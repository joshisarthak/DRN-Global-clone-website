import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Journey', href: '#about' },
    { label: 'Events', href: '#conferences' },
    { label: 'Membership', href: '#publications' },
    { label: 'Shop', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-10 h-10 relative">
                <div className="w-10 h-10 border-2 border-primary rounded flex items-center justify-center">
                  <div className="w-6 h-6 border border-secondary rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-black text-xl text-primary tracking-tight">DRN</span>
                <span className="font-black text-xl text-secondary tracking-tight">|</span>
                <span className="font-black text-xl text-primary tracking-tight">Global</span>
              </div>
              <p className="text-xs text-gray-500 tracking-widest uppercase">Digital Research Network</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                className="text-sm text-gray-700 hover:text-secondary font-medium transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          {/* Join Now Button */}
          <button className="hidden lg:block bg-secondary text-white text-sm px-5 py-2 rounded font-semibold hover:bg-primary transition duration-300 btn-hover">
            Join Now
          </button>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-primary text-2xl p-1">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 pt-2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-2 text-gray-700 hover:text-secondary font-medium text-sm">
                {link.label}
              </a>
            ))}
            <button className="w-full mt-3 bg-secondary text-white py-2 rounded font-semibold hover:bg-primary transition">
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
