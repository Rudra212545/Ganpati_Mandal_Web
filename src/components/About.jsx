import React, { useState, useEffect } from 'react'

// Image Slider Component
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Sample media (images and videos) - replace with your actual media
  const media = [
    {
      id: 1,
      type: "image",
      src: "./images/ganpati.jpg",
      alt: "गणपती उत्सव 2024"
    },
    {
      id: 2,
      type: "video", 
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      poster: "https://images.unsplash.com/photo-1578408777875-6d0d0e1d1dab?w=800&h=600&fit=crop",
      alt: "सांस्कृतिक कार्यक्रम व्हिडिओ"
    },
    {
      id: 3,
      type: "image",
      src: "./images/group_photo.jpg", 
      alt: "आरती वेळा"
    },
    {
      id: 4,
      type: "video",
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      poster: "https://images.unsplash.com/photo-1578408777820-5e5c36c2e5b3?w=800&h=600&fit=crop",
      alt: "समुदायिक सहभाग व्हिडिओ"
    },
    {
      id: 5,
      type: "image",
      src: "./images/miravnuk.jpg",
      alt: "विसर्जन यात्रा"
    },
    {
      id: 6,
      type: "video",
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4", 
      poster: "https://images.unsplash.com/photo-1578408777840-f2c2c5e5e5e6?w=800&h=600&fit=crop",
      alt: "आरती व्हिडिओ"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === media.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [media.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? media.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === media.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main Media Container */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200" style={{ height: '450px' }}>
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {media.map((item, index) => (
            <div key={item.id} className="w-full h-full flex-shrink-0 relative">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x600/f97316/ffffff?text=गणपती+मंडळ"
                  }}
                />
              ) : (
                <video
                  src={item.src}
                  poster={item.poster}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  onError={(e) => {
                    e.target.poster = "https://via.placeholder.com/800x600/f97316/ffffff?text=व्हिडिओ"
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              )}
              
              {/* Play button overlay for videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-sm rounded-full p-6 border-2 border-white/30">
                    <svg className="w-16 h-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-orange-200"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-orange-200"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {media.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-orange-500 to-yellow-500 scale-125 shadow-lg' 
                : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Thumbnail Preview (Hidden on mobile) */}
      <div className="hidden md:flex justify-center mt-8 space-x-4 overflow-x-auto pb-2">
        {media.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-24 h-18 rounded-xl overflow-hidden border-3 transition-all duration-300 relative ${
              index === currentIndex 
                ? 'border-orange-500 scale-110 shadow-lg' 
                : 'border-gray-300 hover:border-gray-400 hover:scale-105'
            }`}
          >
            <img
              src={item.type === "video" ? item.poster : item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/96x72/f97316/ffffff?text=मीडिया"
              }}
            />
            {/* Video indicator on thumbnail */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <svg className="w-5 h-5 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-orange-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-yellow-200/40 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-orange-300/20 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Sacred Symbol */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-500 rounded-full shadow-2xl mb-4 animate-pulse">
              <span className="text-3xl text-white">🕉️</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-6 leading-tight">
            आमच्या मंडळाबद्दल
          </h2>
          
          {/* Enhanced Divider */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 sm:w-20 h-1 bg-gradient-to-r from-transparent via-orange-400 to-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mx-4 shadow-lg"></div>
            <div className="w-12 sm:w-20 h-1 bg-gradient-to-l from-transparent via-orange-400 to-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center mb-20">
          {/* Left side - Enhanced Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-100 p-8 sm:p-10 rounded-3xl shadow-xl border border-orange-200/50 backdrop-blur-sm">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🏛️</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    आमचा वारसा आणि ध्येय
                  </h3>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed text-base sm:text-lg font-medium">
                  आम्ही <span className="font-bold text-orange-600">८ वर्षांपूर्वी</span> या गणपती मंडळाची जबाबदारी स्वीकारली आणि तेव्हापासून 
                  गणपती बाप्पाच्या भक्तीमध्ये आणि समुदायिक सेवेमध्ये आम्ही स्वतःला झोकून दिले आहे. 
                  आमचा उद्देश <span className="font-semibold text-orange-600">एकता वाढवणे, आनंद पसरवणे</span> आणि आपल्या समृद्ध सांस्कृतिक परंपरा जपणे हा आहे.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  दरवर्षी आम्ही समुदाय म्हणून एकत्र येऊन <span className="font-semibold text-orange-600">भव्य उत्सव, सांस्कृतिक कार्यक्रम</span> आणि 
                  धर्मादाय उपक्रम आयोजित करतो जे लोकांना त्यांच्या आध्यात्मिक मुळांशी जोडतात.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Features */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 sm:p-10 border border-orange-100/50 hover:shadow-3xl transition-all duration-500">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✨</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    आम्ही काय करतो
                  </h3>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🎉</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">वार्षिक उत्सव</h4>
                    <p className="text-gray-600 leading-relaxed">पारंपरिक विधी-विधानांसह भव्य गणेश चतुर्थी उत्सव</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🎭</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">सांस्कृतिक कार्यक्रम</h4>
                    <p className="text-gray-600 leading-relaxed">संगीत, नृत्य आणि सांस्कृतिक सादरीकरण</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Gallery Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">📸</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                आमची गैलरी
              </h3>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mx-3"></div>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-l from-transparent via-orange-400 to-orange-500 rounded-full"></div>
            </div>
          </div>

          <ImageSlider />
        </div>

        {/* Enhanced Mobile Call-to-Action */}
        <div className="sm:hidden">
          <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white p-8 rounded-3xl text-center shadow-2xl border border-orange-300">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🙏</span>
            </div>
            <h3 className="text-xl font-bold mb-3">आमच्या समुदायात सामील व्हा</h3>
            <p className="text-orange-100 leading-relaxed">आमच्या आध्यात्मिक प्रवासाचा आणि सांस्कृतिक उत्सवांचा भाग बना</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About