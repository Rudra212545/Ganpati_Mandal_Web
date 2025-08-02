import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "Pavan Ganesh Mandir, Mahanjan Colony,N-2,Cidco, Chh. Sambhaji Nagar, Maharashtra 431001",
      link: "https://maps.app.goo.gl/a8EL5QpUo8UMKbP19"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91-7038121131",
      name: "Hari Witore",
      link: "tel:+917038121131"
    },
    {
      icon: "🕐",
      title: "Temple Hours",
      details: "Daily: 7:00 AM - 10:00 PM",
      subtext: "Aarti: & 7:00 PM"
    }
  ]

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 bg-yellow-200 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-orange-300 rounded-full opacity-15 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          {/* Sacred Symbol */}
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full shadow-lg mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl lg:text-3xl text-white">🏛️</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-3 sm:mb-6 leading-tight px-4">
            Contact Us
          </h2>
          
          {/* Enhanced Divider */}
          <div className="flex items-center justify-center mb-4 sm:mb-6 px-4">
            <div className="w-6 sm:w-12 lg:w-16 h-1 bg-gradient-to-r from-transparent to-orange-400 rounded-full"></div>
            <div className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mx-2 sm:mx-4 flex items-center justify-center shadow-lg">
              <span className="text-white text-xs sm:text-sm">📧</span>
            </div>
            <div className="w-6 sm:w-12 lg:w-16 h-1 bg-gradient-to-l from-transparent to-orange-400 rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed font-medium mb-2 sm:mb-3">
              Connect with our spiritual community for inquiries, donations, or to join our divine family
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-orange-600 font-semibold">
              ✨ We're here to serve and support you ✨
            </p>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-orange-100">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent mb-3 sm:mb-6 text-center">
                🙏 Get In Touch
              </h3>
              <p className="text-gray-700 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed text-center max-w-3xl mx-auto">
                We'd love to hear from you! Whether you want to join our spiritual community, 
                make a donation, or have any questions about our temple activities.
              </p>

              {/* Contact Info Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 lg:p-6 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 hover:shadow-md hover:border-orange-300 transition-all duration-300 block h-full"
                      >
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <span className="text-xl sm:text-2xl lg:text-3xl text-white">{info.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg lg:text-xl">{info.title}</h4>
                          <p className="text-gray-700 text-sm sm:text-base lg:text-lg break-words leading-relaxed">{info.details}</p>
                          {info.name && (
                            <p className="text-orange-600 text-xs sm:text-sm lg:text-base mt-2 font-medium">
                              👤 Contact: {info.name}
                            </p>
                          )}
                          {info.subtext && <p className="text-gray-500 text-xs sm:text-sm lg:text-base mt-1">{info.subtext}</p>}
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 lg:p-6 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 h-full">
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-xl sm:text-2xl lg:text-3xl text-white">{info.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg lg:text-xl">{info.title}</h4>
                          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{info.details}</p>
                          {info.name && (
                            <p className="text-orange-600 text-xs sm:text-sm lg:text-base mt-2 font-medium">
                              👤 Contact: {info.name}
                            </p>
                          )}
                          {info.subtext && <p className="text-gray-500 text-xs sm:text-sm lg:text-base mt-1">{info.subtext}</p>}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-orange-100">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent mb-4 sm:mb-6 text-center">
              🗺️ Find Our Temple
            </h3>
            
            {/* Map Container */}
            <div className="relative rounded-xl overflow-hidden border-2 border-orange-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.4444444444443!2d75.35!3d19.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzQ4LjAiTiA3NcKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="sm:h-80 lg:h-96"
                title="Pavan Ganesh Mandir Location"
              ></iframe>
              
              {/* Overlay with Temple Info */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg border border-orange-200 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-lg sm:text-xl text-white">🏛️</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Pavan Ganesh Mandir</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-tight">Mahajan Colony, N-2, Cidco</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Chh. Sambhaji Nagar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Actions */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="https://maps.app.goo.gl/a8EL5QpUo8UMKbP19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">📍</span>
                Open in Google Maps
              </a>
              
              <a
                href="https://maps.app.goo.gl/a8EL5QpUo8UMKbP19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-orange-600 border-2 border-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-orange-50 transition-all duration-300"
              >
                <span className="mr-2">🧭</span>
                Get Directions
              </a>
            </div>

            {/* Temple Location Info */}
            <div className="mt-6 p-4 sm:p-5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
              <div className="text-center">
                <p className="text-gray-700 font-medium text-sm sm:text-base mb-2">
                  📍 Complete Address
                </p>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Pavan Ganesh Mandir, Mahajan Colony, N-2, Cidco,<br className="hidden sm:block" />
                  Chhatrapati Sambhaji Nagar, Maharashtra 431001
                </p>
                <div className="mt-3 pt-3 border-t border-orange-200">
                  <p className="text-orange-600 font-semibold text-xs sm:text-sm">
                    🚗 Easy parking available • 🚌 Public transport accessible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blessing Message */}
        <div className="text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-200">
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium mb-2">
            🌟 May Lord Ganesha guide your path to our temple 🌟
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600">
            "सर्वविघ्नहरो देव श्रीगणेश प्रणमाम्यहम्" - We bow to Lord Ganesha, remover of all obstacles
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact