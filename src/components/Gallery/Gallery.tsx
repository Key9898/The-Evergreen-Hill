import { useState, useRef } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import GalleryBanner from './GalleryBanner'
import GalleryTabs from './GalleryTabs'
import GalleryPagination from './GalleryPagination'
import TheEvergreenHillEstate from '../../assets/Gallery/the_evergreen_hill_estate_gallery.jpg'
import AWarmWelcome from '../../assets/Gallery/A_warm_welcome_gallery.jpg'
import KalawGoldenHour from '../../assets/Gallery/kalaw_golden_hour_gallery.jpg'
import AmidstThePineForests from '../../assets/Gallery/amidst_the_pine_forests_gallery.jpg'
import DeluxeGardenGallery from '../../assets/Gallery/deluxe_garden_gallery.jpg'
import DeluxeMountainGallery from '../../assets/Gallery/deluxe_mountain_gallery.jpg'
import HoneymoonSuiteGallery from '../../assets/Gallery/honeymoon_suite_galllery.jpg'
import TheEvergreenHillSuiteGallery from '../../assets/Gallery/the_evergreen_hill_suite_gallery.jpg'
import DeluxeTwinGardenGallery from '../../assets/Gallery/deluxe_twin_garden_gallery.jpg'
import DeluxeTwinMountainGallery from '../../assets/Gallery/deluxe_twin_mountain_gallery.jpg'
import FamilySuiteGallery from '../../assets/Gallery/family_suite_gallery.jpg'
import ExecutiveSuiteGallery from '../../assets/Gallery/executive_suite_gallery.jpg'
import MountainViewDining from '../../assets/Gallery/mountain_view_dinning_gallery.jpg'
import AuthenticShanCuisine from '../../assets/Gallery/authentic_shan_cuisine_gallery.jpg'
import EveningCocktails from '../../assets/Gallery/evening_cocktails_galllery.jpg'
import BreakfastView from '../../assets/Gallery/breakfast_view_gallery.jpg'
import TranquilTreatment from '../../assets/Gallery/tranquil_treatment_gallery.jpg'
import TraditionalShanMassage from '../../assets/Gallery/traditional_shan_massage_gallery.jpg'
import HotelFitnessCenter from '../../assets/Gallery/hotel_fitness_center_gallery.jpg'
import PoolsideRelaxation from '../../assets/Gallery/poolside_relaxation_gallery.jpg'
import MorningYoga from '../../assets/Gallery/morning_yoga_galllery.jpg'
import GuidedMountainTreks from '../../assets/Gallery/guided_mountain_treks_gallery.jpg'
import CyclingTour from '../../assets/Gallery/cycling_gallery.jpg'
import LocalMarket from '../../assets/Gallery/local_market_gallery.jpg'

const allFiles = [
  // The Hotel & Scenery Category (4 items)
  {
    title: 'The Evergreen Hill Estate',
    category: 'The Hotel & Scenery',
    source: TheEvergreenHillEstate,
    imgAlt: 'Exterior view of The Evergreen Hill hotel in Kalaw',
  },
  {
    title: 'A Warm Welcome',
    category: 'The Hotel & Scenery',
    source: AWarmWelcome,
    imgAlt: 'The elegant colonial-style lobby of the hotel',
  },
  {
    title: 'Kalaw\'s Golden Hour',
    category: 'The Hotel & Scenery',
    source: KalawGoldenHour,
    imgAlt: 'Sunrise view over the Shan Highlands from the hotel',
  },
  {
    title: 'Amidst the Pine Forests',
    category: 'The Hotel & Scenery',
    source: AmidstThePineForests,
    imgAlt: 'The hotel nestled among serene pine forests',
  },

  // Rooms & Suites Category (8 items)
  {
    title: 'Deluxe Garden View',
    category: 'Rooms & Suites',
    source: DeluxeGardenGallery,
    imgAlt: 'Interior of the Deluxe Garden View room',
  },
  {
    title: 'Deluxe Mountain View',
    category: 'Rooms & Suites',
    source: DeluxeMountainGallery,
    imgAlt: 'Spacious Deluxe Mountain View room with a private balcony',
  },
  {
    title: 'Romantic Honeymoon Suite',
    category: 'Rooms & Suites',
    source: HoneymoonSuiteGallery,
    imgAlt: 'Honeymoon Suite featuring a private jacuzzi',
  },
  {
    title: 'The Evergreen Hill Suite',
    category: 'Rooms & Suites',
    source: TheEvergreenHillSuiteGallery,
    imgAlt: 'The luxurious living room of The Evergreen Hill Suite',
  },
  {
    title: 'Deluxe Twin Garden View',
    category: 'Rooms & Suites',
    source: DeluxeTwinGardenGallery,
    imgAlt: 'Interior of the Deluxe Twin Garden View room featuring two single beds',
  },
  {
    title: 'Deluxe Twin Mountain View',
    category: 'Rooms & Suites',
    source: DeluxeTwinMountainGallery,
    imgAlt: 'The Deluxe Twin Mountain View room with two separate beds and a private balcony',
  },
  {
    title: 'Spacious Family Suite',
    category: 'Rooms & Suites',
    source: FamilySuiteGallery,
    imgAlt: 'The living area of the Family Suite with multiple beds',
  },
  {
    title: 'The Executive Suite',
    category: 'Rooms & Suites',
    source: ExecutiveSuiteGallery,
    imgAlt: 'Elegant Executive Suite with a dedicated workspace',
  },

  // Dining & Bar Category (4 items)
  {
    title: 'Mountain View Dining',
    category: 'Dining & Bar',
    source: MountainViewDining,
    imgAlt: 'The main restaurant with panoramic mountain views',
  },
  {
    title: 'Authentic Shan Cuisine',
    category: 'Dining & Bar',
    source: AuthenticShanCuisine,
    imgAlt: 'A beautifully plated traditional Shan noodle dish',
  },
  {
    title: 'Evening Cocktails',
    category: 'Dining & Bar',
    source: EveningCocktails,
    imgAlt: 'The cozy bar and lounge area in the evening',
  },
  {
    title: 'Breakfast with a View',
    category: 'Dining & Bar',
    source: BreakfastView,
    imgAlt: 'A breakfast spread on a balcony overlooking the Kalaw hills',
  },

  // Spa & Wellness Center Category (5 items)
  {
    title: 'Tranquil Treatment Rooms',
    category: 'Spa & Wellness Center',
    source: TranquilTreatment,
    imgAlt: 'A serene and peaceful spa treatment room',
  },
  {
    title: 'Traditional Shan Massage',
    category: 'Spa & Wellness Center',
    source: TraditionalShanMassage,
    imgAlt: 'A guest receiving a traditional Shan massage',
  },
  {
    title: 'State-of-the-Art Fitness Center',
    category: 'Spa & Wellness Center',
    source: HotelFitnessCenter,
    imgAlt: 'The modern, fully-equipped gym at the hotel',
  },
  {
    title: 'Poolside Relaxation',
    category: 'Spa & Wellness Center',  
    source: PoolsideRelaxation,
    imgAlt: 'The hotel\'s swimming pool with sun loungers',
  },
  {
    title: 'Morning Yoga Sessions',
    category: 'Spa & Wellness Center',
    source: MorningYoga,
    imgAlt: 'A quiet space for yoga and meditation',
  },

  // Activities Category (3 items)
  {
    title: 'Guided Mountain Treks',
    category: 'Activities',
    source: GuidedMountainTreks,
    imgAlt: 'Guests trekking through the pine forests near Kalaw',
  },
  {
    title: 'Cycling Through Villages',
    category: 'Activities',
    source: CyclingTour,
    imgAlt: 'A cyclist on a trail passing by a local village',
  },
  {
    title: 'A Trip to the Local Market',
    category: 'Activities',
    source: LocalMarket,
    imgAlt: 'The vibrant and colorful central market in Kalaw',
  },
]

// Gallery Titles
const galleryTitles = {
  'All Photos': 'A Glimpse of The Evergreen Hill',
  'The Hotel & Scenery': 'Architecture & Landscape',
  'Rooms & Suites': 'Your Private Sanctuaries',
  'Dining & Bar': 'A Taste of the Highlands',
  'Spa & Wellness Center': 'A Haven for Wellness',
  'Activities': 'Adventures in Kalaw',
};

interface GalleryProps {
  onNavigate?: (page: string) => void
}

export default function Gallery({ onNavigate }: GalleryProps) {
  const [activeTab, setActiveTab] = useState('All Photos')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const galleryRef = useRef<HTMLDivElement>(null)

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName)
    setCurrentPage(1) // Reset to first page when changing tabs
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to gallery section when page changes
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Filter files based on active tab
  const filteredFiles = activeTab === 'All Photos' 
    ? allFiles 
    : allFiles.filter(file => file.category === activeTab)

  // Calculate pagination
  const totalItems = filteredFiles.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredFiles.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen -mt-5">
      {/* Header + Banner */}
      <Header onNavigate={onNavigate} activePage="gallery" />
      <div className="relative -mt-20 sm:-mt-24">
        <GalleryBanner onNavigate={onNavigate} />
      </div>
      
      {/* Tabs Section */}
      <GalleryTabs activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div className="bg-white" ref={galleryRef}>
        {/* Main Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-16 pt-12 sm:px-6 sm:py-16 sm:pt-12 lg:px-8 lg:py-16 lg:pt-12">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
              {galleryTitles[activeTab as keyof typeof galleryTitles]}
            </h2>
            <p className="mt-4 text-lg/8 text-slate-700">
              Step inside and explore the timeless elegance and natural beauty of our sanctuary in the Shan highlands.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mt-12">
            {currentItems.length > 0 ? (
              <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {currentItems.map((file, index) => (
                  <li key={`${file.category}-${startIndex + index}`} className="relative">
                    <div className="group overflow-hidden rounded-md bg-slate-100 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-teal-600">
                      <img
                        alt={file.title}
                        src={file.source}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        className="pointer-events-none aspect-10/7 rounded-md shadow-lg object-cover outline -outline-offset-1 outline-black/5 group-hover:scale-105 transition-transform duration-300"
                      />
                      <button type="button" className="absolute inset-0 focus:outline-hidden">
                        <span className="sr-only">View details for {file.title}</span>
                      </button>
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-base font-medium text-teal-700">{file.title}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-slate-500">No arrangements found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <GalleryPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalPosts={filteredFiles.length}
          postsPerPage={itemsPerPage}
        />

      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}