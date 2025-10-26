import Breadcrumbs from '../Layout/Breadcrumbs'
import ExperiencesImg from '../../assets/Experiences/experiences_banner_img.jpg'

interface ExperiencesBannerProps {
    onNavigate?: (page: string) => void
}

export default function ExperiencesBanner({ onNavigate }: ExperiencesBannerProps) {
    const breadcrumbPages = [
        { name: 'Experiences', href: '#experiences', current: true }
    ]

  return (
    <div className="relative bg-slate-900">
      {/* Decorative image and overlay */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          alt="Experiences Banner" 
          src={ExperiencesImg}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="size-full object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-slate-900 opacity-50" />

      {/* Content Container */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6 pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 text-center lg:px-8">
        {/* Breadcrumbs */}
        <div className="relative z-10 mt-12 mb-6 sm:mb-8 lg:mb-12">
          <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-4xl">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">
            Moments to Cherish  
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Beyond a comfortable stay, The Evergreen Hill offers a collection of curated experiences designed to delight your senses, restore your well-being, and connect you with the beauty of Kalaw.
          </p>
        </div>
      </div>
    </div>
  )
}