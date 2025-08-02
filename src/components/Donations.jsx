import React, { useState, useEffect } from 'react'
// Note: In your actual project, install and import: npm install xlsx
// import * as XLSX from 'xlsx'

const Donations = () => {
  const [donations, setDonations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const donationsPerPage = 10

  // Calculate pagination values
  const totalPages = Math.ceil(donations.length / donationsPerPage)
  const startIndex = (currentPage - 1) * donationsPerPage
  const endIndex = startIndex + donationsPerPage
  const currentDonations = donations.slice(startIndex, endIndex)

  // Function to load donations from public file
  const loadDonationsFromFile = async () => {
    setLoading(true)
    setError('')

    try {
      // For CSV file from public folder
      const response = await fetch('/donations.csv') // Place your file in public/donations.csv
      
      if (!response.ok) {
        throw new Error('Donations file not found')
      }

      const text = await response.text()
      
      // Check if file is empty or only contains whitespace
      if (!text.trim()) {
        setDonations([])
        setError('CSV file is empty. Add donation data to display records.')
        return
      }
      
      const lines = text.split('\n').filter(line => line.trim())
      
      // Check if we have at least header and one data row
      if (lines.length < 2) {
        setDonations([])
        setError('CSV file only contains headers or is incomplete. Add donation data to display records.')
        return
      }
      
      const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''))
      
      const processedDonations = lines.slice(1)
        .filter(line => line.trim())
        .map((line, index) => {
          const values = line.split(',').map(v => v.trim().replace(/"/g, ''))
          
          // Skip rows that have no meaningful data (all empty values)
          const hasData = values.some(value => value && value !== '')
          if (!hasData) return null
          
          const name = values[headers.indexOf('Name')] || values[headers.indexOf('name')] || ''
          const amount = parseInt(values[headers.indexOf('Amount')] || values[headers.indexOf('amount')] || '0') || 0
          const date = values[headers.indexOf('Date')] || values[headers.indexOf('date')] || ''
          
          // Skip rows where we don't have both name AND amount (or meaningful data)
          if ((!name || name.trim() === '') && amount === 0) return null
          if (!name || name.trim() === '') return null // Don't create Anonymous entries
          
          return {
            id: index + 1,
            name: name || 'Anonymous',
            amount: amount,
            date: date || new Date().toLocaleDateString('en-IN'),
          }
        })
        .filter(donation => donation !== null) // Remove null entries

      setDonations(processedDonations)
      
      /* 
      // For Excel file from public folder - Use this when xlsx is installed:
      const response = await fetch('/donations.xlsx') // Place your file in public/donations.xlsx
      const arrayBuffer = await response.arrayBuffer()
      const workbook = XLSX.read(arrayBuffer)
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]
      const jsonData = XLSX.utils.sheet_to_json(worksheet)

      const processedDonations = jsonData.map((row, index) => ({
        id: index + 1,
        name: row.Name || row.name || 'Anonymous',
        amount: parseInt(row.Amount || row.amount || 0) || 0,
        date: row.Date || row.date || new Date().toLocaleDateString('en-IN'),
        message: row.Message || row.message || ''
      }))

      setDonations(processedDonations)
      */

    } catch (err) {
      console.error('Error loading donations:', err)
      // Set empty donations array when file is not found or empty
      setDonations([])
      setError('No donations file found. Upload donations.csv to the public folder to display donation records.')
    } finally {
      setLoading(false)
    }
  }

  // Load donations on component mount
  useEffect(() => {
    loadDonationsFromFile()
  }, [])

  // Reset to page 1 when donations change
  useEffect(() => {
    setCurrentPage(1)
  }, [donations])

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page)
    // Scroll to donations list
    document.getElementById('donations-list')?.scrollIntoView({ behavior: 'smooth' })
  }

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 relative px-4">
          {/* Decorative Background Elements - Adjusted for mobile */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-orange-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-5 sm:top-10 right-1/4 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-yellow-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 bg-orange-200 rounded-full opacity-25 animate-pulse delay-500"></div>
          </div>
          
          {/* Sacred Symbol - Responsive sizing */}
          <div className="mb-4 md:mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full shadow-lg mb-3 md:mb-4">
              <span className="text-2xl sm:text-2xl md:text-3xl text-white">🕉️</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight px-2">
            Support Our Mandal
          </h2>
          
          {/* Enhanced Divider - Mobile responsive */}
          <div className="flex items-center justify-center mb-4 md:mb-6 px-4">
            <div className="w-8 sm:w-12 md:w-16 h-1 bg-gradient-to-r from-transparent to-orange-400 rounded-full"></div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mx-2 sm:mx-3 md:mx-4 flex items-center justify-center shadow-lg">
              <span className="text-white text-xs sm:text-sm">🙏</span>
            </div>
            <div className="w-8 sm:w-12 md:w-16 h-1 bg-gradient-to-l from-transparent to-orange-400 rounded-full"></div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium px-4">
            Your generous donations help us maintain our sacred temple, organize grand celebrations, 
            and serve our community with devotion. 
            <span className="block mt-2 md:mt-3 text-base sm:text-lg text-orange-600 font-semibold">
              ✨ Every contribution brings blessings and makes a divine difference ✨
            </span>
          </p>
          
          {/* Blessing Quote - Mobile responsive */}
          <div className="mt-6 md:mt-8 p-3 md:p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm italic text-gray-600">
              "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
            </p>
            <p className="text-xs text-gray-500 mt-1">
              May all beings be happy, may all beings be healthy
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          {/* QR Code Payment Section - Centered and standalone */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 md:p-8 max-w-lg w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Make a Donation
            </h3>
            
            {/* QR Code Payment - Mobile optimized */}
            <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-orange-300 shadow-lg">
              <h5 className="text-lg sm:text-xl font-semibold text-center text-gray-900 mb-4 md:mb-6">
                📱 Scan QR Code to Pay
              </h5>
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-orange-200 shadow-md">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    {/* Replace with your actual payment QR code image */}
                    
                    {/* Uncomment and replace with your QR code image */}
                    <img src="/images/upi_qr.jpg" alt="Payment QR Code" className="w-full h-full object-contain rounded" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm sm:text-base text-gray-700 font-medium mb-2 md:mb-3 px-2">
                  Scan with any UPI app like PhonePe, Google Pay, Paytm, or your banking app
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4">
                  Enter any amount you wish to donate
                </p>
                <div className="bg-gray-50 rounded-lg p-3 md:p-4 border border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">UPI ID:</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-800 break-all">hariwitore@oksbi</p>
                </div>
              </div>
            </div>

            {/* Contact Info - Mobile responsive */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-3 md:p-4 text-center mt-4 md:mt-6">
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-semibold">Need help?</span> WhatsApp us at{' '}
                <span className="font-semibold text-green-600 break-all">+91-8668265982</span>
              </p>
            </div>
          </div>
        </div>

        {/* Donation List Section */}
        <div className="max-w-6xl mx-auto" id="donations-list">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent mb-4">
              🙏 Our Generous Donors 🙏
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We gratefully acknowledge all devotees who have contributed to our sacred cause
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="mb-8 text-center">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 max-w-md mx-auto border border-orange-200">
                <div className="text-orange-600">
                  <span className="animate-spin inline-block text-2xl">⚡</span>
                  <p className="mt-2">Loading donations...</p>
                </div>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="mb-8 text-center">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-sm text-yellow-800">{error}</p>
              </div>
            </div>
          )}

          {/* Donations Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white text-center">
              <div className="text-2xl font-bold">
                ₹{donations.reduce((sum, d) => sum + d.amount, 0).toLocaleString()}
              </div>
              <div className="text-sm opacity-90">Total Donations</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-4 text-white text-center">
              <div className="text-2xl font-bold">{donations.length}</div>
              <div className="text-sm opacity-90">Total Donors</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white text-center">
              <div className="text-2xl font-bold">
                ₹{(donations.reduce((sum, d) => sum + d.amount, 0) / Math.max(donations.length, 1)).toFixed(0)}
              </div>
              <div className="text-sm opacity-90">Average Donation</div>
            </div>
          </div>

          {/* Donations List */}
          <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-0">
                  Recent Donations
                </h4>
                {donations.length > 0 && (
                  <div className="text-white text-sm opacity-90">
                    Showing {startIndex + 1}-{Math.min(endIndex, donations.length)} of {donations.length}
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              {donations.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">📝</div>
                  <p className="text-gray-600">No donations to display yet.</p>
                  <p className="text-sm text-gray-500 mt-2">Upload an Excel file to show donation records.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {currentDonations.map((donation) => (
                      <div
                        key={donation.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex-1">
                          <div className="flex items-center mb-2 sm:mb-0">
                            <span className="text-lg mr-2">🙏</span>
                            <div>
                              <h5 className="font-semibold text-gray-800">{donation.name}</h5>
                              <p className="text-sm text-gray-600">{donation.date}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-4">
                          <span className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
                            ₹{donation.amount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="mt-8 pt-6 border-t border-orange-100">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Page Info */}
                        <div className="text-sm text-gray-600">
                          Page {currentPage} of {totalPages}
                        </div>

                        {/* Pagination Buttons */}
                        <div className="flex items-center gap-2">
                          {/* Previous Button */}
                          <button
                            onClick={goToPrevious}
                            disabled={currentPage === 1}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              currentPage === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg'
                            }`}
                          >
                            ← Previous
                          </button>

                          {/* Page Numbers */}
                          <div className="flex gap-1">
                            {/* Show first page */}
                            {currentPage > 3 && (
                              <>
                                <button
                                  onClick={() => goToPage(1)}
                                  className="w-10 h-10 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-orange-100 transition-colors"
                                >
                                  1
                                </button>
                                {currentPage > 4 && (
                                  <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                                )}
                              </>
                            )}

                            {/* Show current page and surrounding pages */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                              .filter(page => 
                                page === currentPage || 
                                page === currentPage - 1 || 
                                page === currentPage + 1 ||
                                (currentPage <= 2 && page <= 3) ||
                                (currentPage >= totalPages - 1 && page >= totalPages - 2)
                              )
                              .map(page => (
                                <button
                                  key={page}
                                  onClick={() => goToPage(page)}
                                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                                    page === currentPage
                                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md'
                                      : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                                  }`}
                                >
                                  {page}
                                </button>
                              ))}

                            {/* Show last page */}
                            {currentPage < totalPages - 2 && (
                              <>
                                {currentPage < totalPages - 3 && (
                                  <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                                )}
                                <button
                                  onClick={() => goToPage(totalPages)}
                                  className="w-10 h-10 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-orange-100 transition-colors"
                                >
                                  {totalPages}
                                </button>
                              </>
                            )}
                          </div>

                          {/* Next Button */}
                          <button
                            onClick={goToNext}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              currentPage === totalPages
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg'
                            }`}
                          >
                            Next →
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Gratitude Message */}
          <div className="text-center mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-200">
            <p className="text-lg text-gray-700 font-medium">
              🌟 May Lord Ganesha bless all our donors with prosperity and happiness 🌟
            </p>
            <p className="text-sm text-gray-600 mt-2">
              "दानं परमं तप" - Donation is the highest penance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donations