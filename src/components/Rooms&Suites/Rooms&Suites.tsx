import 
{ WifiIcon, 
  TvIcon, 
  ShieldCheckIcon, 
  HomeIcon, 
  SparklesIcon, 
  EyeIcon } 
from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import { LuCoffee } from "react-icons/lu";  
import { StarIcon } from '@heroicons/react/20/solid'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import RoomsSuitesBanner from './Rooms&SuitesBanner'
import RoomsSuitesPagination from './Rooms&SuitesPagination'
import BookNowForm from '../Layout/BookForm'
import DeluxeGardenViewImg from '../../assets/Rooms&Suites/deluxe_garden_view.jpg'
import DeluxeMountainViewImg from '../../assets/Rooms&Suites/deluxe_mountain_view.jpg'
import HoneymoonSuiteImg from '../../assets/Rooms&Suites/honeymoon_suite.jpg'
import TheEvergreenHillSuiteImg from '../../assets/Rooms&Suites/the_evergreen_hill_suite.jpg'
import DeluxeTwinGardenViewImg from '../../assets/Rooms&Suites/deluxe_twin_garden_view.jpg'
import DeluxeTwinMountainViewImg from '../../assets/Rooms&Suites/deluxe_twin_mountain_view.jpg'
import FamilySuiteImg from '../../assets/Rooms&Suites/family_suite.jpg'
import ExecutiveSuiteImg from '../../assets/Rooms&Suites/executive_suite.jpg'
import ViewDetails from './ViewDetails'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Garden View',
    type: 'Room',
    price: 'From 350,000 MMK/night',
    guests: '2 Guests',
    size: '35 sqm',
    description: 'Elegant room with garden views, featuring colonial-inspired décor and modern amenities for a comfortable stay.',
    features: ['Free Wi-Fi', 'Smart TV', 'Coffee/Tea Maker', 'Air Conditioning', 'Private Bathroom', 'Garden View'],
    imageAlt: 'Deluxe Garden View',
    imageUrl: DeluxeGardenViewImg,
  },
  {
    id: 2,
    name: 'Deluxe Mountain View',
    type: 'Room',
    price: 'From 450,000 MMK/night',
    guests: '2 Guests',
    size: '40 sqm',
    description: 'Spacious room with breathtaking mountain views, perfect for couples seeking tranquility and natural beauty.',
    features: ['Free Wi-Fi', 'Smart TV', 'Coffee/Tea Maker', 'Air Conditioning', 'Private Balcony', 'Mountain View'],
    imageAlt: 'Deluxe Mountain View',
    imageUrl: DeluxeMountainViewImg,
  },
  {
    id: 3,
    name: 'Honeymoon Suite',
    type: 'Suite',
    price: 'From 950,000 MMK/night',
    guests: '2 Guests',
    size: '70 sqm',
    description: 'Romantic suite with private terrace and jacuzzi, perfect for special occasions and intimate getaways.',
    features: ['Free Wi-Fi', 'Smart TV', 'Coffee/Tea Maker', 'Air Conditioning', 'Private Jacuzzi', 'Romantic Setting'],
    imageAlt: 'Honeymoon Suite',
    imageUrl: HoneymoonSuiteImg,
  },
  {
    id: 4,
    name: 'The Evergreen Hill Suite',
    type: 'Suite',
    price: 'From 1,350,000 MMK/night',
    guests: '4 Guests',
    size: '95 sqm',
    description: 'Our finest accommodation with separate bedroom, living room, and dining area, offering unparalleled luxury.',
    features: ['Free Wi-Fi', 'Smart TV', 'Coffee/Tea Maker', 'Air Conditioning', 'Butler Service', 'Luxury Amenities'],
    imageAlt: 'The Evergreen Hill Suite',
    imageUrl: TheEvergreenHillSuiteImg,
  },
  {
    id: 5,
    name: 'Deluxe Twin Garden View',
    type: 'Room',
    price: 'From 350,000 MMK/night',
    guests: '2 Guests',
    size: '35 sqm',
    description: 'Comfortable twin-bed room with serene garden views, perfect for friends or family members sharing.',
    features: ['Free Wi-Fi', 'Smart TV', 'Coffee/Tea Maker', 'Air Conditioning', 'Private Bathroom', 'Garden View'],
    imageAlt: 'Deluxe Twin Garden View',
    imageUrl: DeluxeTwinGardenViewImg,
  },
  {
    id: 6,
    name: 'Deluxe Twin Mountain View',
    type: 'Room',
    price: 'From 450,000 MMK/night',
    guests: '2 Guests',
    size: '40 sqm',
    description: 'Twin-bed room with panoramic mountain views and modern comforts for a refreshing stay.',
    features: ['Free Wi-Fi', 'Smart TV', 'Coffee/Tea Maker', 'Air Conditioning', 'Private Bathroom', 'Mountain View'],
    imageAlt: 'Deluxe Twin Mountain View',
    imageUrl: DeluxeTwinMountainViewImg,
  },
  {
    id: 7,
    name: 'Family Suite',
    type: 'Suite',
    price: 'From 650,000 MMK/night',
    guests: '4 Guests',
    size: '65 sqm',
    description: 'Generous suite with separate living area, ideal for families or groups seeking extra space and comfort.',
    features: ['Free Wi-Fi', 'Smart TV', 'Coffee/Tea Maker', 'Air Conditioning', 'Living Area', 'Family Friendly'],
    imageAlt: 'Family Suite',
    imageUrl: FamilySuiteImg,
  },
  {
    id: 8,
    name: 'Executive Suite',
    type: 'Suite',
    price: 'From 800,000 MMK/night',
    guests: '2 Guests',
    size: '55 sqm',
    description: 'Luxurious suite with premium amenities and stunning views, designed for discerning travelers.',
    features: ['Free Wi-Fi', 'Smart TV', 'Coffee/Tea Maker', 'Air Conditioning', 'Premium Amenities', 'Panoramic View'],
    imageAlt: 'Executive Suite',
    imageUrl: ExecutiveSuiteImg,
  },
]

const getFeatureIcon = (feature: string) => {
  switch (feature) {
    case 'Free Wi-Fi':
      return <WifiIcon className="h-4 w-4" />
    case 'Smart TV':
      return <TvIcon className="h-4 w-4" />
    case 'Coffee/Tea Maker':
      return <LuCoffee className="h-4 w-4" />
    case 'Private Bathroom':
      return <HomeIcon className="h-4 w-4" />
    case 'Garden View':
      return <EyeIcon className="h-4 w-4" />
    case 'Mountain View':
      return <EyeIcon className="h-4 w-4" />
    case 'Private Balcony':
      return <HomeIcon className="h-4 w-4" />
    case 'Living Area':
      return <HomeIcon className="h-4 w-4" />
    case 'Premium Amenities':
      return <SparklesIcon className="h-4 w-4" />
    case 'Panoramic View':
      return <EyeIcon className="h-4 w-4" />
    case 'Private Jacuzzi':
      return <SparklesIcon className="h-4 w-4" />
    case 'Romantic Setting':
      return <SparklesIcon className="h-4 w-4" />
    case 'Butler Service':
      return <SparklesIcon className="h-4 w-4" />
    case 'Luxury Amenities':
      return <SparklesIcon className="h-4 w-4" />
    default:
      return <ShieldCheckIcon className="h-4 w-4" />
  }
}

interface RoomsSuitesProps {
  onNavigate?: (page: string) => void
}

export default function RoomsSuites({ onNavigate }: RoomsSuitesProps) {
  // Pagination state and derived data
  const postsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const filteredPosts = rooms
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentRooms = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const handlePageChange = (page: number) => setCurrentPage(page)

  const [bookFormOpen, setBookFormOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState('')

  // Details modal state
  type Room = (typeof rooms)[number] & { gallery?: string[] }
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [detailsRoom, setDetailsRoom] = useState<Room | null>(null)
  const openDetails = (room: Room) => {
    setDetailsRoom(room)
    setDetailsOpen(true)
  }
  const closeDetails = () => {
    setDetailsOpen(false)
    setDetailsRoom(null)
  }

  const handleBookNowClick = (roomName: string) => {
    setSelectedRoom(roomName)
    setBookFormOpen(true)
  }

  // Availability: read saved search criteria and existing bookings
  const [searchCriteria, setSearchCriteria] = useState<{ checkIn: string; checkOut: string } | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [availability, setAvailability] = useState<Record<string, number>>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem('eh_check_search')
      setSearchCriteria(raw ? JSON.parse(raw) : null)
    } catch {
      setSearchCriteria(null)
    }
  }, [])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('eh_bookings')
      setBookings(raw ? JSON.parse(raw) : [])
    } catch {
      setBookings([])
    }
  }, [bookFormOpen])

  const datesOverlap = (aStart: string, aEnd: string, bStart: string, bEnd: string) =>
    new Date(aStart) < new Date(bEnd) && new Date(bStart) < new Date(aEnd)

  useEffect(() => {
    if (!searchCriteria) {
      setAvailability({})
      return
    }
    const map: Record<string, number> = {}
    rooms.forEach(r => {
      const count = bookings.reduce((acc, b) => {
        if (
          b.roomName === r.name &&
          datesOverlap(searchCriteria.checkIn, searchCriteria.checkOut, b.checkIn, b.checkOut)
        ) {
          return acc + (typeof b.rooms === 'number' ? b.rooms : 1)
        }
        return acc
      }, 0)
      map[r.name] = Math.max(ROOMS_PER_TYPE - count, 0)
    })
    setAvailability(map)
  }, [searchCriteria, bookings])

  // Dynamic rating/reviews from GuestReviews (localStorage)
  const [roomStats, setRoomStats] = useState<Record<string, { avg: number; count: number }>>({})
  const normalizeName = (s: string) => s.toLowerCase().trim()

  useEffect(() => {
    try {
      const raw = localStorage.getItem('eh_featured_reviews')
      const list: Array<{ rating?: number; roomType?: string }> = raw ? JSON.parse(raw) : []
      const sumMap = new Map<string, { sum: number; count: number }>()
      for (const r of list) {
        if (!r || !r.roomType || typeof r.rating !== 'number') continue
        const key = normalizeName(r.roomType)
        const entry = sumMap.get(key) ?? { sum: 0, count: 0 }
        entry.sum += r.rating
        entry.count += 1
        sumMap.set(key, entry)
      }
      const out: Record<string, { avg: number; count: number }> = {}
      for (const [key, { sum, count }] of sumMap.entries()) {
        out[key] = { avg: count ? sum / count : 0, count }
      }
      setRoomStats(out)
    } catch {
      setRoomStats({})
    }
  }, [])
  return (
    <div className="min-h-screen -mt-5">
      <Header onNavigate={onNavigate} activePage="roomsAndSuites" />
      <div className="relative -mt-20 sm:-mt-24">
      <RoomsSuitesBanner onNavigate={onNavigate} />
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600 mt-46 sm:mt-26 lg:mt-8 mb-6">
            Find Your Serenity
          </h2>
          <p className="text-lg/8 text-slate-700 max-w-3xl mx-auto">
            From sunlit mornings with mountain views to cozy evenings spent in comfort, each of our accommodations is a destination in itself. Explore our collection to find the perfect backdrop for your Kalaw story.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {currentRooms.map((room) => (
            <div
              key={room.id}
              className="group relative overflow-hidden rounded-md bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              {/* Room Image */}
              <div className="relative h-64 sm:h-72 group overflow-hidden rounded-md">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-md bg-teal-700/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {room.type}
                  </span>
                </div>
                {roomStats[normalizeName(room.name)] && roomStats[normalizeName(room.name)].count > 0 ? (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-900">
                        {roomStats[normalizeName(room.name)].avg.toFixed(1)}
                      </span>
                      <span className="text-xs text-slate-600">({roomStats[normalizeName(room.name)].count})</span>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Room Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-1">{room.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-600">
                      <span>{room.guests}</span>
                      <span>•</span>
                      <span>{room.size}</span>
                    </div>
                    <div className="mt-2">
                      {(availability[room.name] ?? ROOMS_PER_TYPE) > 0 ? (
                        <span className="inline-flex items-center rounded-md bg-teal-50  hover:bg-teal-100 text-slate-600 px-2 py-1 text-base"> 
                          {(availability[room.name] ?? ROOMS_PER_TYPE)} of {ROOMS_PER_TYPE} available
                        </span>
                      ) 
                      : (
                        <span className="inline-flex items-center rounded-md bg-red-100 text-red-700 px-2 py-1 text-base">
                          Fully booked for selected dates
                        </span>
                      )
                      }
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-teal-700">{room.price}</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 text-lg/6 leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-base font-medium text-teal-700 mb-3">Room Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-teal-700">
                        {getFeatureIcon(feature)}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    type="button"
                    className="flex-1 bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handleBookNowClick(room.name)}
                    disabled={Boolean(searchCriteria) && (availability[room.name] ?? ROOMS_PER_TYPE) === 0}
                  >
                    Book Now
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
                    onClick={() => openDetails(room)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <RoomsSuitesPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalPosts={filteredPosts.length}
          postsPerPage={postsPerPage}
        />
        {/* ViewDetails */}
        <ViewDetails open={detailsOpen} onClose={closeDetails} room={detailsRoom} />
        {/* Additional Information */}
        <div className="mt-16 bg-slate-50 rounded-md shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-semibold text-teal-700 mb-4">The Evergreen Hill Standard</h3>
            <p className="text-lg/6 text-slate-700 max-w-2xl mx-auto">
              To ensure a seamless and comfortable stay, every room and suite is equipped with our signature selection of thoughtful amenities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-md flex items-center justify-center mx-auto mb-3">
                <WifiIcon className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="font-medium text-teal-700 mb-1">Free Wi-Fi</h4>
              <p className="text-sm text-slate-700">Complimentary high-speed internet access.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-md flex items-center justify-center mx-auto mb-3">
                <TvIcon className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="font-medium text-teal-700 mb-1">Smart TV</h4>
              <p className="text-sm text-slate-700">Streaming apps & international channels.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-md flex items-center justify-center mx-auto mb-3">
                <LuCoffee className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="font-medium text-teal-700 mb-1">Coffee & Tea</h4>
              <p className="text-sm text-slate-700">A curated selection of local coffee & tea.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-md flex items-center justify-center mx-auto mb-3">
                <ShieldCheckIcon className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="font-medium text-teal-700 mb-1">24/7 Service</h4>
              <p className="text-sm text-slate-700">Dedicated assistance, anytime you need.</p>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />

      {/* Book Form Modal */}
      {bookFormOpen && (
        <BookNowForm 
          isOpen={bookFormOpen} 
          onClose={() => setBookFormOpen(false)} 
          defaultRoomType={selectedRoom}
          onBookingSaved={(booking) => {
          setBookings(prev => [...prev, booking])
          }}
        />
      )}
    </div>
  )
}

// Treat each room type as having 5 identical rooms (capacity)
const ROOMS_PER_TYPE = 5

type Booking = {
  roomName: string
  checkIn: string
  checkOut: string
  adults?: number
  children?: number
  rooms: number
}
