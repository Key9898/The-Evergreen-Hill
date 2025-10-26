import Breadcrumbs from "../Layout/Breadcrumbs"
import CheckForm from "./CheckForm"
import RoomsSuitesImg from '../../assets/Rooms&Suites/rooms_suites_banner_img.jpg'

interface RoomsSuitesBannerProps {
    onNavigate?: (page: string) => void
}

export default function RoomsSuitesBanner({ onNavigate }: RoomsSuitesBannerProps) {
    const breadcrumbPages = [
        { name: 'Rooms & Suites', href: '#roomsAndSuites', current: true }
    ]

    return (
        <div className="relative bg-slate-900">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
              alt="Rooms & Suites Banner"
              src={RoomsSuitesImg}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="size-full object-cover"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-slate-900 opacity-50" />

          {/* Content Container */}
          <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8 pt-40 pb-72 sm:pt-48 sm:pb-58 lg:pt-56 lg:pb-40 text-center">
            {/* Breadcrumbs */}
            <div className="relative z-10 mb-6 sm:mb-8 lg:mb-12">
              <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">
                Rooms & Suites
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Where timeless colonial charm blends with modern luxury in each of our thoughtfully designed accommodations. Your private sanctuary, offering stunning views of the Kalaw hills, awaits you.
              </p>
            </div>
          </div>

          {/* Floating Check Form centered between hero and content */}
          <div className="absolute inset-x-0 bottom-0 translate-y-1/2 pb-12 sm:translate-y-1/3 sm:pt-36 lg:translate-y-1/3 lg:pt-34 px-4 sm:px-6 lg:px-8 z-30">
            <div className="mx-auto max-w-7xl">
              <CheckForm onNavigate={onNavigate} />
            </div>
          </div>
        </div>
    )
}