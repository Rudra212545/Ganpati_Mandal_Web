import React from 'react'

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Ganesh Chaturthi 2024",
      date: "September 7, 2024",
      time: "6:00 AM - 10:00 PM",
      location: "Mandal Premises",
      description: "Grand celebration with traditional rituals, cultural programs, and community feast",
      type: "upcoming",
      icon: "🕉️"
    },
    {
      id: 2,
      title: "Cultural Night",
      date: "September 5, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Community Hall",
      description: "Music, dance performances, and cultural activities for all ages",
      type: "upcoming",
      icon: "🎭"
    },
    {
      id: 3,
      title: "Bhajan Sandhya",
      date: "September 3, 2024",
      time: "6:30 PM - 8:30 PM",
      location: "Mandal Temple",
      description: "Devotional songs and spiritual discourse",
      type: "upcoming",
      icon: "🙏"
    }
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Ganesh Visarjan 2023",
      date: "September 19, 2023",
      description: "Beautiful procession and immersion ceremony",
      type: "past",
      icon: "🌊"
    },
    {
      id: 5,
      title: "Community Service Day",
      date: "August 15, 2023",
      description: "Blood donation camp and health awareness program",
      type: "past",
      icon: "❤️"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Events
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in celebrating the divine presence of Lord Ganesha through our various events and activities
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-orange-100">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl">{event.icon}</div>
                    <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      Upcoming
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mt-4">{event.title}</h4>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4">{event.description}</p>
                  <button className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Past Events
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{event.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
                    <p className="text-gray-600 text-sm">{event.date}</p>
                    <p className="text-gray-700 mt-2">{event.description}</p>
                  </div>
                  <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    Completed
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-6">
              Don't miss out on our upcoming events! Join our community and be part of our celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Join Our Community
              </button>
              <button className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events 