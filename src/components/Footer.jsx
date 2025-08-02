import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Mobile-optimized WhatsApp link handler
  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    const whatsappLink = "https://chat.whatsapp.com/FGAgW9aJvmjFjxru9IiSQg"
    
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768
    
    if (isMobile) {
      // Try to open WhatsApp app first, fallback to web
      const whatsappApp = `whatsapp://chat?code=${whatsappLink.split('/').pop()}`
      
      // Create a temporary link to test if WhatsApp app opens
      const tempLink = document.createElement('a')
      tempLink.href = whatsappApp
      tempLink.click()
      
      // Fallback to web version after a short delay if app doesn't open
      setTimeout(() => {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer')
      }, 1500)
    } else {
      // Desktop - open web version
      window.open(whatsappLink, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Subtle Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-8 text-yellow-300 text-2xl">✨</div>
        <div className="absolute top-40 right-8 text-orange-300 text-2xl">🪔</div>
        <div className="absolute bottom-40 left-8 text-yellow-400 text-2xl">🌸</div>
        <div className="absolute bottom-20 right-8 text-orange-300 text-2xl">✨</div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Logo with Om Symbol */}
          <div className="flex items-center justify-center mb-6">
            <Link to="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="text-3xl text-yellow-400 drop-shadow-xl animate-pulse filter brightness-125 group-hover:scale-110 transition-transform duration-300">🕉️</div>
                <div className="absolute inset-0 text-3xl text-yellow-300 blur-lg opacity-40 animate-pulse">🕉️</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">
                  पावन गणेश मंडळ
                </div>
                <div className="text-sm text-yellow-200 font-semibold">
                  Pavan Ganesh Mandal
                </div>
              </div>
            </Link>
          </div>

          {/* Sanskrit Blessing */}
          <div className="mb-6">
            <p className="text-yellow-300 font-bold text-lg mb-2 drop-shadow-lg">
              "श्री गणेशाय नमः"
            </p>
            <p className="text-sm text-gray-300 italic">
              Salutations to Lord Ganesha
            </p>
          </div>

          <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Dedicated to serving our community through spiritual guidance, cultural preservation, 
            and social service. Join us in celebrating the divine presence of Lord Ganesha.
          </p>
        </div>

        {/* WhatsApp Community QR Code */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <div className="text-2xl mb-4">📱</div>
            <h4 className="text-lg font-semibold text-orange-400 mb-4">
              Join Our WhatsApp Community
            </h4>
            <p className="text-gray-300 mb-6">
              Scan the QR code to join our WhatsApp community for updates, events, and daily spiritual messages
            </p>
            
            {/* QR Code Container */}
            <div className="bg-white rounded-2xl p-6 mb-6 inline-block shadow-lg">
              <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500">
                  <img src="/images/whatsapp-QR.jpg" alt="WhatsApp QR Code" className="w-full h-full object-contain rounded-lg" />
                </div>
              </div>
            </div>
            
            {/* Optimized WhatsApp Button */}
            <div className="flex justify-center mb-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 border-2 border-green-500 min-w-[200px] touch-manipulation"
              >
                <span className="text-2xl">📱</span>
                <span>Join WhatsApp</span>
              </button>
            </div>

            {/* Alternative Text Link for Mobile */}
            <div className="md:hidden mb-4">
              <p className="text-xs text-gray-400 mb-2">
                Button not working? Try this direct link:
              </p>
              <a 
                href="https://chat.whatsapp.com/FGAgW9aJvmjFjxru9IiSQg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline text-sm font-semibold hover:text-green-300"
              >
                Open WhatsApp Community
              </a>
            </div>
            
            <p className="text-xs text-gray-400">
              🔒 Your privacy is important to us. We only share important updates and events.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center items-center">
            <div className="text-gray-300 text-sm flex items-center space-x-2 text-center">
              <span>© {currentYear} पावन गणेश मंडळ (Pavan Ganesh Mandal).  <br />All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}

export default Footer