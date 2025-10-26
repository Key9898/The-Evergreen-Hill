import { LuShoppingCart, LuMountain, LuLandmark } from "react-icons/lu"
import TrainStaionIcon from '../../assets/Location/train_station_icon.png'

const middleTestimonialOne = {
  title: 'Scenic Trekking Trails',
  body:
    'Kalaw is the trekking capital of Myanmar. Allow us to arrange a guided trek, from a few hours to a multi-day adventure, through pine forests and local villages.',
}

const middleTestimonialTwo = {
  title: 'Historic Railway Station',
  body:
    'Step back in time at this beautiful, well-preserved colonial-era train station, a perfect spot for photos and soaking in the town\'s history. (5-minute drive)',
}

const leftTestimonial = {
  title: 'Kalaw Central Market',
  body:
    'Immerse yourself in local life at this vibrant market, famous for its fresh produce, Shan noodles, and colorful goods from surrounding hill tribes. (5-minute drive)',
}

const rightTestimonial = {
  title: 'Hnee Paya (Bamboo Buddha)',
  body:
    'Visit this unique and revered pagoda, home to a 500-year-old Buddha image woven from bamboo strips. A must-see spiritual landmark in Kalaw. (10-minute drive)',
}

interface ExploreNearbyProps {
    onNavigate?: (page: string) => void
}

export default function ExploreNearby({ onNavigate }: ExploreNearbyProps) { void onNavigate
  return (
    <div className="relative isolate bg-white">
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-16 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">Explore Nearby</h2>
          <p className="mt-6 text-lg/8 text-slate-700">
            The Evergreen Hill is the perfect base from which to discover the charms of Kalaw and its beautiful surroundings.
          </p>
        </div>

        {/* Four-card layout: 1 col on mobile, 2 cols on tablet, 4 on desktop */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-slate-900">
          {/* Left: Testimonial */}
          <figure className="relative rounded-md bg-white p-6 shadow-lg ring-1 ring-slate-900/10 transition-transform hover:scale-105 transition-shadow hover:shadow-xl">
            <span className="pointer-events-none absolute -top-3 -left-3 inline-flex items-center justify-center size-10 rounded-md bg-white ring-1 ring-slate-900/10 shadow">
              <LuShoppingCart className="size-6 text-slate-700" aria-hidden="true" />
            </span>
            <figcaption className="mb-3 text-xl font-semibold text-teal-700 text-center">
              {leftTestimonial.title}
            </figcaption>
            <blockquote className="text-lg/6 text-slate-700 text-center">
              <p>{`“${leftTestimonial.body}”`}</p>
            </blockquote>
          </figure>

          {/* Middle One: Testimonial */}
          <figure className="relative rounded-md bg-white p-6 shadow-lg ring-1 ring-slate-900/10 transition-transform hover:scale-105 transition-shadow hover:shadow-xl">
            <span className="pointer-events-none absolute -top-3 -left-3 inline-flex items-center justify-center size-10 rounded-md bg-white ring-1 ring-slate-900/10 shadow">
              <LuMountain className="size-6 text-slate-700" aria-hidden="true" />
            </span>
            <figcaption className="mb-3 text-xl font-semibold text-teal-700 text-center">
              {middleTestimonialOne.title}
            </figcaption>
            <blockquote className="text-lg/6 text-slate-700 text-center">
              <p>{`“${middleTestimonialOne.body}”`}</p>
            </blockquote>
          </figure>

          {/* Middle Two: Testimonial */}
          <figure className="relative rounded-md bg-white p-6 shadow-lg ring-1 ring-slate-900/10 transition-transform hover:scale-105 transition-shadow hover:shadow-xl">
            <span className="pointer-events-none absolute -top-3 -left-3 inline-flex items-center justify-center size-10 rounded-md bg-white ring-1 ring-slate-900/10 shadow">
              <img src={TrainStaionIcon} alt="Train Station Icon" className="size-6 text-slate-700" />
            </span>
            <figcaption className="mb-3 text-xl font-semibold text-teal-700 text-center">
              {middleTestimonialTwo.title}
            </figcaption>
            <blockquote className="text-lg/6 text-slate-700 text-center">
              <p>{`“${middleTestimonialTwo.body}”`}</p>
            </blockquote>
          </figure>

          {/* Right: Testimonial */}
          <figure className="relative rounded-md bg-white p-6 shadow-lg ring-1 ring-slate-900/10 transition-transform hover:scale-105 transition-shadow hover:shadow-xl">
            <span className="pointer-events-none absolute -top-3 -left-3 inline-flex items-center justify-center size-10 rounded-md bg-white ring-1 ring-slate-900/10 shadow">
              <LuLandmark className="size-6 text-slate-700" aria-hidden="true" />
            </span>
            <figcaption className="mb-3 text-xl font-semibold text-teal-700 text-center">
              {rightTestimonial.title}
            </figcaption>
            <blockquote className="text-lg/6 text-slate-700 text-center">
              <p>{`“${rightTestimonial.body}”`}</p>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
  )
}