import { useState } from "react"
import Header from "../Layout/Header"
import ScrollToTopButton from "../Layout/ScrollToTopButton"
import Footer from "../Layout/Footer"
import ActivitiesBanner from "./ActivitiesBanner"
import LeadConcierge from "./LeadConcierge"
import ActivitiesForm from "./ActivitiesForm"
import MountainAndVillageTreks from '../../assets/Activities/mountain_village_treks.jpg'
import MouintainCycling from '../../assets/Activities/mountain_cycling.jpg'
import LocalLifeTour from '../../assets/Activities/local_life_tour.jpg'
import Adventure from '../../assets/Activities/adventure.jpg'

const posts = [
  {
    id: 1,
    title: 'Guided Mountain & Village Treks',
    description:
      'Follow our expert guides on scenic trails through pine forests, rolling hills, and remote ethnic minority villages (such as Palaung, Danu, and Pa-O).',
    imageAlt: 'Mountain and Village Treks',
    imageUrl:  MountainAndVillageTreks,
    category: { title: 'Activities' },
    time: { time: 'Departs daily at 8:00 AM' },
    packages: [
      'Half-Day Viewpoint Trek (4 hours, Easy) price: Starting from 45,000 MMK per person',
      'Full-Day Village Immersion (8 hours, Moderate) price: Starting from 95,000 MMK per person (includes lunch)',
      'Two-Day Trek to Inle Lake (Advanced) price: Starting from 220,000 MMK per person (includes meals & overnight stay)',
      'Pine Forest Walk (2 hours, Easy) price: Starting from 45,000 MMK per person',
      'Sunset Hill Trek (3 hours, Easy) price: Starting from 60,000 MMK per person',
    ],
  },
  {
    id: 2,
    title: 'Cycling & Mountain Biking',
    description:
      'Explore Kalaw and its beautiful surroundings on two wheels. We offer tours for all fitness levels, from leisurely rides to challenging mountain biking trails.',
    imageAlt: 'Mountain Cycling',
    imageUrl:  MouintainCycling,
    category: { title: 'Activities' },
    time: { time: 'Departs daily at 8:00 AM' },
    packages: [
      'Kalaw Town Discovery Ride (2 hours, Easy) price: Starting from K 35,000 per person (includes bike rental)',
      'Countryside Loop Adventure (4 hours, Moderate) price: SStarting from K 50,000 per person (includes bike rental)',
      'Reservoir & Viewpoint Ride (3 hours, Easy-Moderate) price: Starting from K 60,000 per person (includes bike rental)',
      'Myin Ma Hti Cave Challenge (5 hours, Advanced) price: Starting from K 120,000 per person (includes bike rental)',
      'Self-Guided Bike Rental (Half-Day / Full-Day) price: Starting from K 100,000 per person (includes bike rental)',
    ],
  },
  {
    id: 3,
    title: 'Cultural & Local Life Tours',
    description:
      'Go beyond the trails and connect with the heart of Kalaw. These tours focus on the culture, history, and daily life of the region\'s diverse people.',
    imageAlt: 'Local Life Tour',
    imageUrl:  LocalLifeTour,
    category: { title: 'Activities' },
    time: { time: 'Departs daily at 8:00 AM' },
    packages: [
       'Kalaw Market & Hnee Paya Tour (3 hours) price: Starting from K 40,000 per person (includes transportation)',
      'Traditional Shan Cooking Class (4 hours) price: Starting from K 75,000 per person (includes all ingredients and lunch)',
      'A Visit to Green Hill Valley Elephant Camp (Half-Day Trip) price: Starting from K 85,000 per person (includes entrance fee & transportation)',
      'Kalaw Heritage Walk (2 hours) price: Starting from K 50,000 per person',
      'Local Tea Plantation Tour (3 hours) price: Starting from K 80,000 per person (includes transportation)', 
    ],
  },
  {
    id: 4,
    title: 'Plan Your Adventure',
    description:
      'Let us help you plan the perfect Kalaw adventure. Find essential tips below, or contact our concierge for personalized assistance.',
    imageAlt: 'Adventure',
    imageUrl:  Adventure,
    category: { title: 'Activities' },
    time: { time: 'All tours require advance booking at least 24 hours.' },
    notices: [
      'How to Book: All tours and activities can be arranged through our Lead Concierge at the front desk. We recommend booking at least 24 hours in advance.',
      'What to Bring: Comfortable walking shoes, a hat, sunscreen, a light jacket, and a reusable water bottle are recommended for all outdoor activities.',
      'Private & Custom Tours: Want a unique experience? Our concierge can work with you to create a personalized itinerary.',
      'Cancellations: A fee may apply for tours canceled less than 24 hours in advance. Please contact our concierge for details.',
      'Health & Fitness: Some tours require moderate physical fitness. For your safety, please inform our concierge of any health concerns prior to booking.',
      'Pricing: Prices are "starting from" and per person, generally including a guide and water. Meals and entrance fees are extra unless specified. Please confirm details upon booking.',
      'Weather: Outdoor activities depend on suitable weather. In case of severe weather, our concierge will gladly assist with rescheduling or finding a safe alternative.',
    ],
    button: 'Plan Your Adventure',
  },
]

interface ActivitiesProps {
  onNavigate?: (page: string) => void
}

export default function Activities({ onNavigate }: ActivitiesProps) {
  const [openForm, setOpenForm] = useState(false)
  return (
    <div className="min-h-screen -mt-5">
      <Header onNavigate={onNavigate} activePage="experiences" />
      <div className="relative -mt-20 sm:-mt-24">
        <ActivitiesBanner onNavigate={onNavigate} />
      </div>

      {/* Lead Concierge Section */}
      <LeadConcierge />

      {/* Offers grid */}
      <div className="py-16 pt-0 pb-16 lg:py-16 lg:pt-0 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:max-w-none sm:gap-x-6 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-12">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className={`flex flex-col items-start justify-between ${
                  index % 2 === 0
                    ? 'lg:col-start-1 lg:col-span-6'
                    : 'lg:col-start-7 lg:col-span-6'
                } rounded-md bg-white ring-1 ring-slate-200 shadow-sm p-4 sm:p-6`}
              >
                {/* image + content */}
                <div className="relative w-full group overflow-hidden rounded-md">
                  <img
                    alt={post.imageAlt}
                    src={post.imageUrl}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="aspect-video w-full rounded-md shadow-lg bg-slate-100 object-cover sm:aspect-2/1 lg:aspect-3/2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-md shadow-lg inset-ring inset-ring-slate-900/10" />
                </div>
                <div className="flex max-w-xl grow flex-col justify-between">
                  <div className="mt-8 flex items-center gap-x-4 text-base">
                    <span className="relative z-10 rounded-md bg-teal-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-teal-100">
                      {post.category.title}
                    </span>
                    {post.time?.time && (
                      <span className="text-slate-500">{post.time.time}</span>
                    )}
                  </div>
                  <div className="group relative grow">
                    <h3 className="mt-3 text-xl font-semibold text-teal-700">
                      {post.title}
                    </h3>
                    <p className="mt-5 text-base text-slate-700">{post.description}</p>
                  </div>

                  {/* Packages: Numbers & Prices */}
                  {Array.isArray(post.packages) && post.packages.length > 0 && (
                    <div className={`w-full ${post.id === 3 ? 'mt-6 lg:mb-49' : 'mt-6'}`}>
                      <ol className="list-decimal pl-4 space-y-3 text-base text-slate-700">
                        {post.packages.map((offer, idx) => {
                          const match = offer.match(/^(.*?)(?:\s+price:\s+)(.*)$/i)
                          const title = match ? match[1].trim() : offer.trim()
                          const price = match ? match[2].trim() : ''
                          return (
                            <li key={idx} className="whitespace-normal">
                              <span>{title}</span>
                              {price && (
                                <div className="mt-1 text-slate-600">
                                  <span className="text-base font-medium text-teal-700">Price:</span> {price}
                                </div>
                              )}
                            </li>
                          )
                        })}
                      </ol>
                    </div>
                  )}

                  {/* CTA Button (only if post.button exists) */}
                  {post.button && (
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => setOpenForm(true)}
                        className="inline-flex items-center rounded-md bg-teal-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-600"
                      >
                        {post.button}
                      </button>
                    </div>
                  )}

                  {/* Notices: Numbers */}
                  {Array.isArray(post.notices) && post.notices.length > 0 && (
                    <div className="mt-4 w-full rounded-md bg-teal-50 p-4 ring-1 ring-slate-200">
                      <h4 className="text-sm font-semibold text-slate-900">Notices</h4>
                      <ol className="mt-2 list-decimal pl-4 space-y-3 text-sm text-slate-700">
                        {post.notices.map((note, idx) => (
                          <li
                            key={idx}
                            className={post.id === 4 && /^Cancellations:/i.test(note) ? 'text-red-400' : undefined}
                          >
                            {note}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  </div>
                </article>
            ))}    
            
    </div>
    </div>
    </div>  

    {/* Activities Form Modal */}
    <ActivitiesForm
      open={openForm}
      onClose={() => setOpenForm(false)}
      onSubmit={() => setOpenForm(false)}
    />

    <ScrollToTopButton />
    <Footer onNavigate={onNavigate} />
    </div>
)
}