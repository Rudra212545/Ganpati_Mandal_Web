import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  const handleEventsClick = () => {
    navigate('/events')
  }

  const handleAboutClick = () => {
    navigate('/about')
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Desktop Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed hidden md:block"
          style={{
            backgroundImage: `url('/images/ganesh-hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        
        {/* Mobile Background - Optimized for mobile experience */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
          style={{
            backgroundImage: `url('/images/ganesh-hero-mobile.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        
        {/* Desktop Theme Overlay */}
        <div className="absolute inset-0 hidden md:block"></div>
        <div className="absolute inset-0 hidden md:block "></div>
        
        {/* Mobile-Specific Decorative Elements - Different Theme */}
        <div className="absolute inset-0 opacity-25 md:hidden">
          <div className="absolute top-16 left-4 text-pink-300 text-3xl animate-pulse">💎</div>
          <div className="absolute top-32 right-4 text-purple-300 text-4xl animate-pulse" style={{animationDelay: '1s'}}>🌟</div>
          <div className="absolute bottom-32 left-6 text-pink-400 text-3xl animate-pulse" style={{animationDelay: '2s'}}>✨</div>
          <div className="absolute bottom-48 right-8 text-purple-300 text-3xl animate-pulse" style={{animationDelay: '0.5s'}}>💫</div>
          <div className="absolute top-1/2 left-8 text-pink-300 text-2xl animate-pulse" style={{animationDelay: '1.5s'}}>🔮</div>
        </div>
        
        {/* Desktop Decorative Elements - Traditional Theme */}
        <div className="absolute inset-0 opacity-20 hidden md:block">
          <div className="absolute top-16 left-4 text-yellow-300 text-3xl animate-pulse">✨</div>
          <div className="absolute top-32 right-4 text-orange-300 text-4xl animate-pulse" style={{animationDelay: '1s'}}>🪔</div>
          <div className="absolute bottom-32 left-6 text-yellow-400 text-3xl animate-pulse" style={{animationDelay: '2s'}}>🌸</div>
          <div className="absolute bottom-48 right-8 text-orange-300 text-3xl animate-pulse" style={{animationDelay: '0.5s'}}>✨</div>
        </div>
      </div>

      {/* Mobile-First Content Layout - Repositioned for better idol visibility */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Mobile Layout - Content positioned at bottom */}
        <div className="md:hidden flex flex-col justify-end min-h-screen pb-20 pt-32">
          {/* Mobile Content Container with gradient background for better readability */}
          <div className="bg-gradient-to-t from-black/80 via-purple-900/60 to-transparent backdrop-blur-sm rounded-t-3xl p-6 space-y-6">
            
            {/* Om Symbol - Smaller on mobile */}
            <div className="text-center">
              <div className="relative">
                <div className="text-6xl text-pink-400 drop-shadow-2xl animate-pulse filter brightness-125">🕉️</div>
                <div className="absolute inset-0 text-6xl text-pink-300 blur-lg opacity-40 animate-pulse">🕉️</div>
              </div>
            </div>
            
            {/* Sanskrit Mantra - Mobile optimized */}
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl font-bold">
                <span className="text-pink-200 drop-shadow-xl font-semibold bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                  श्री गणेशाय नमः
                </span>
              </h1>
            </div>
            
            {/* Main Heading - Mobile optimized */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-black leading-tight">
                <span className="text-white drop-shadow-2xl bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent filter brightness-150 font-black">
                  पावन गणेश मंडळ
                </span>
              </h2>
            </div>
            
            {/* Compact Description */}
            <div className="text-center">
              <p className="text-sm text-pink-300 font-bold drop-shadow-lg mb-2">
                "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ"
              </p>
              <p className="text-xs text-gray-200 leading-relaxed">
                Celebrating Lord Ganesha with devotion & heritage
              </p>
            </div>

            {/* Compact Mobile Buttons */}
            <div className="flex space-x-3">
              <Link
                to="/events"
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl border border-yellow-400 block text-center"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span className="text-lg">📅</span>
                  <span>Events</span>
                </span>
              </Link>
              
              <Link
                to="/about"
                className="flex-1 bg-white/20 backdrop-blur-lg border border-yellow-400 text-yellow-100 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:text-white px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl block text-center"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span className="text-lg">📖</span>
                  <span>About</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Bottom aligned like mobile for better idol visibility */}
        <div className="hidden md:flex flex-col justify-end min-h-screen pb-16 pt-32">
          {/* Desktop Content Container with gradient background for better readability */}
          <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-t-3xl p-8 space-y-8 max-w-4xl mx-auto">
          
          {/* Om Symbol */}
          <div className="text-center mb-4">
            <div className="relative">
              <div className="text-7xl lg:text-8xl text-yellow-400 drop-shadow-2xl animate-pulse filter brightness-125">🕉️</div>
              <div className="absolute inset-0 text-7xl lg:text-8xl text-yellow-300 blur-lg opacity-40 animate-pulse">🕉️</div>
            </div>
          </div>
          
          {/* Sanskrit Mantra */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-yellow-200 drop-shadow-xl font-semibold bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                श्री गणेशाय नमः
              </span>
            </h1>
          </div>
          
          {/* Main Heading */}
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              <span className="text-white drop-shadow-2xl bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent filter brightness-150 font-black">
                पावन गणेश मंडळ
              </span>
            </h2>
          </div>
          
          {/* Description - More compact */}
          <div className="text-center mb-6">
            <p className="text-xl md:text-2xl mb-3 text-yellow-300 font-bold drop-shadow-lg leading-relaxed">
              "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ"
            </p>
            <p className="text-base md:text-lg text-gray-100 leading-relaxed drop-shadow-md max-w-2xl mx-auto">
              Celebrating the divine presence of Lord Ganesha with devotion, community spirit, and cultural heritage
            </p>
          </div>

          {/* Desktop Buttons - More compact */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <Link
              to="/events"
              className="group relative flex-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 text-white px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-orange-500/60 border-2 border-yellow-400 overflow-hidden block text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center space-x-3">
                <span className="text-2xl drop-shadow-lg animate-bounce">📅</span>
                <span className="drop-shadow-lg">View Events</span>
              </span>
            </Link>
            
            <Link
              to="/about"
              className="group flex-1 bg-white/20 border-2 border-yellow-400 text-yellow-100 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:text-white px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-yellow-500/60 block text-center"
            >
              <span className="flex items-center justify-center space-x-3">
                <span className="text-2xl drop-shadow-lg">📖</span>
                <span className="drop-shadow-lg">Learn More</span>
              </span>
            </Link>
          </div>
          
          {/* Compact Quote Section */}
          <div className="text-center bg-gradient-to-br from-white/95 via-yellow-50/95 to-orange-50/95 rounded-2xl p-6 shadow-2xl border-2 border-yellow-400 max-w-md mx-auto relative overflow-hidden">
            <div className="absolute top-2 left-2 text-orange-400 text-lg opacity-60">🌸</div>
            <div className="absolute top-2 right-2 text-orange-400 text-lg opacity-60">🌸</div>
            <div className="absolute bottom-2 left-2 text-orange-400 text-lg opacity-60">🌸</div>
            <div className="absolute bottom-2 right-2 text-orange-400 text-lg opacity-60">🌸</div>
            
            <div className="relative text-center">
              <div className="text-3xl mb-3 animate-pulse">🙏</div>
              <p className="text-lg text-orange-800 italic mb-2 font-bold leading-snug">
                "गणेश जी की कृपा से सभी कार्य सफल हों"
              </p>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed font-medium">
                "May all endeavors be successful with Lord Ganesha's blessings"
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Show on both mobile and desktop */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-10 md:w-10 md:h-12 border-2 border-yellow-400 bg-black/30 backdrop-blur-lg rounded-full flex justify-center shadow-xl">
          <div className="w-1.5 h-4 md:w-2 md:h-5 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mt-2 md:mt-3 animate-pulse shadow-inner"></div>
        </div>
      </div>
      
      {/* Mobile-First Floating Action Elements */}
      <div className="absolute top-4 right-4 md:hidden">
        <div className="bg-pink-400/20 backdrop-blur-lg rounded-full p-2 border border-pink-400/50">
          <div className="text-xl animate-spin" style={{animationDuration: '10s'}}>🔮</div>
        </div>
      </div>
    </section>
  )
}

export default Hero