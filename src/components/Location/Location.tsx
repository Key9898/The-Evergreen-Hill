import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import LocationBanner from './LocationBanner'
import LocationMap from './LocationMap'
import GettingHere from './GettingHere'
import ExploreNearby from './ExploreNearby'

export default function Location({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen -mt-5">
      {/* Header + Banner */}
      <Header onNavigate={onNavigate} activePage="location" />
      <div className="relative -mt-20 sm:-mt-24">
        <LocationBanner onNavigate={onNavigate} />
      </div>

      {/* Main */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 pt-12 sm:py-16 sm:pt-12 lg:py-16 lg:pt-12">
          {/* Top: text only */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
              Our Home, Kalaw
            </h2>
            {/* Paragraph 1 */}
            <p className="mt-4 text-lg/8 text-slate-700">
              Kalaw is <span className='font-semibold text-2xl text-teal-600'>more than a destination; it's a feeling.</span> It's the crisp, pine-scented air of the Shan Highlands, the gentle pace of life, and the lingering charm of its colonial-era villas. A town where misty mornings give way to sunlit afternoons, perfect for exploration or quiet contemplation.
            </p>
            {/* Paragraph 2 */}
            <p className="mt-2 text-lg/6 text-slate-500">
              We chose this enchanting town as our home because we believe in its power to soothe and inspire. The Evergreen Hill was built to be a reflection of Kalaw&apos;s soul—a place that honors its natural beauty and timeless heritage while offering <span className='font-semibold text-2xl text-teal-600'>a sanctuary of modern comfort.</span> We invite you to experience Kalaw <span className='font-semibold text-2xl text-teal-600'>not just as a tourist, but as our cherished guest.</span>
            </p>
          </div>

          {/* Map + text row */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 lg:items-center lg:gap-x-8">
            {/* Left: Map */}
            <div className="lg:col-span-7 xl:col-span-8">
              <LocationMap className="aspect-4/2 w-full rounded-lg" />
            </div>

            {/* Right: Address & Contact */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 xl:col-span-4">
              <h2 className="whitespace-nowrap sm:whitespace-normal text-4xl font-semibold tracking-tight text-pretty text-teal-700">
                Address & Contact
              </h2>

              <dl className="mt-10 space-y-4 text-base text-slate-700">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-teal-700" />
                  </dt>
                  <dd>
                    The Evergreen Hill, Kalaw, No. 10, Pinewood<br />
                    Road, Ward (3), Kalaw, Shan State, Myanmar                   
                  </dd>
                </div>

                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-teal-700" />
                  </dt>
                  <dd>
                    <a href="tel:+959450123459" className="hover:text-slate-900">
                      +95 9 450 123 459
                    </a>
                  </dd>
                </div>

                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-teal-700" />
                  </dt>
                  <dd>
                    <a href="mailto:info@evergreenhillhotel.com" className="hover:text-slate-900">
                      info@evergreenhillhotel.com
                    </a>
                  </dd>
                </div>

                {/* Alert text */}
                <div className="flex gap-x-4">
                  <dt className="flex-none w-6">
                    <span className="sr-only">Directions</span>
                  </dt>
                  <dd className="text-teal-500">
                    <span aria-hidden="true" className="ml-1">←</span> You can get directions on Google Maps 
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <GettingHere onNavigate={onNavigate} />
        <ExploreNearby onNavigate={onNavigate} />
      </div>

      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}