import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: '📖' },
    { name: 'Events', href: '/events', icon: '📅' },
    { name: 'Donations', href: '/donations', icon: '❤️' },
    { name: 'Contact', href: '/contact', icon: '📞' }
  ]

  // const handleHomeClick = () => {
  //   navigate('/')
  //   setIsOpen(false)
  // }

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Desktop Theme - Traditional Orange/Yellow */}
      <div className="hidden md:block bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 backdrop-blur-md shadow-2xl border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Title Section */}
            <div className="flex items-center space-x-3">
            
             
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group relative flex flex-col items-center px-6 py-3 rounded-2xl text-base font-bold transition-all duration-300 transform ${
                    location.pathname === item.href
                      ? 'text-orange-600 bg-white shadow-xl scale-110 border-2 border-yellow-400'
                      : 'text-white hover:text-orange-600 hover:bg-white/90 hover:scale-105 border-2 border-transparent hover:border-yellow-300'
                  }`}
                >
                  <span className="text-2xl mb-1 group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                    {item.icon}
                  </span>
                  <span className="text-sm font-bold drop-shadow-md">{item.name}</span>
                  {location.pathname === item.href && (
                    <div className="absolute -bottom-1 w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="flex items-center space-x-2">
             
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Theme - Pink/Purple */}
      <div className="md:hidden bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 backdrop-blur-md shadow-2xl border-b-4 border-pink-400">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            {/* Home/Back Button */}
            <Link
              to="/"
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 border-2 border-pink-300 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 align-middle"
            >
              <span className="text-xl">🏠</span>
              <span className="text-white font-bold text-sm">Home</span>
            </Link>

            {/* Center Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-3xl animate-pulse">🕉️</div>
              <div className="text-white font-bold text-sm">
              
              </div>
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative bg-white/20 backdrop-blur-lg rounded-full p-3 border-2 border-pink-300 hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-pink-300/50 transition-all duration-300 transform hover:scale-105"
              aria-label="Open menu"
            >
              <div className="relative">
                {!isOpen ? (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {/* Notification dot for active menu */}
                {isOpen && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 border-2 border-white rounded-full animate-pulse"></div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Pink/Purple Theme */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-br from-pink-600 via-purple-700 to-pink-700 backdrop-blur-xl shadow-2xl border-t-2 border-pink-400">
          <div className="px-4 py-6 space-y-4">
            {/* Menu Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center items-center space-x-3 mb-3">
               
                <h3 className="text-xl font-bold text-white">Menu</h3>
             
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-400 via-yellow-400 to-pink-400 mx-auto rounded-full"></div>
            </div>
            
            {/* Navigation Items */}
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full p-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.href
                    ? 'text-purple-600 bg-white shadow-xl border-2 border-yellow-400'
                    : 'text-white bg-white/20 backdrop-blur-lg hover:bg-white/30 border-2 border-pink-300 hover:border-yellow-300'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl drop-shadow-lg">{item.icon}</span>
                  <span className="drop-shadow-md">{item.name}</span>
                  {location.pathname === item.href && (
                    <span className="ml-auto text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full shadow-lg">
                      ✨ Active
                    </span>
                  )}
                </div>
              </Link>
            ))}
            
            {/* Quick Actions */}
            <div className="pt-6 border-t-2 border-pink-400/50">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-xl font-bold text-center hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🏠 Home
                </Link>
                <Link
                  to="/events"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl font-bold text-center hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📅 Events
                </Link>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full p-4 text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl font-bold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>✕</span>
                  <span>Close Menu</span>
                </span>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center space-x-6 pt-4 opacity-60">
              <div className="text-2xl animate-pulse">💎</div>
              <div className="text-2xl animate-pulse" style={{animationDelay: '0.5s'}}>🌟</div>
              <div className="text-2xl animate-pulse" style={{animationDelay: '1s'}}>✨</div>
              <div className="text-2xl animate-pulse" style={{animationDelay: '1.5s'}}>💫</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar