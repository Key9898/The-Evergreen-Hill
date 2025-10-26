import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/Logo/The Evergreen Hill.svg'
import HeroImage from '../../assets/Hero/hero_img.jpg'
import BookForm from '../Layout/BookForm'

const leftNavigation = [
  { name: 'Rooms & Suites', href: '#', key: 'roomsAndSuites' },
  { name: 'Experiences', href: '#', key: 'experiences' },
  { name: 'Gallery', href: '#', key: 'gallery' },
]

const rightNavigation = [
  { name: 'Our Story', href: '#', key: 'ourStory' },
  { name: 'Location', href: '#', key: 'location' },
  { name: 'Contact', href: '#', key: 'contact' },
]

interface HeroSectionProps {
  onNavigate?: (page: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [bookFormOpen, setBookFormOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigation = (key: string) => {
    onNavigate?.(key)
  }

  const handleLogoClick = () => {
    onNavigate?.('home')
  }

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 overflow-visible">
          {/* Left Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {leftNavigation.map((item) => (
              <button
                type="button"
                key={item.name}
                onClick={() => handleNavigation(item.key)}
                className="text-sm font-semibold text-white hover:text-teal-600 transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex lg:flex-1 lg:justify-center">
            <button
              type="button"
              onClick={handleLogoClick}
              className="m-0 p-0 overflow-visible bg-transparent border-none cursor-pointer hover:bg-teal-700/10 rounded-md transition-colors"
            >
              <span className="sr-only">The Evergreen Hill</span>
              <div className="w-16 h-16 rounded-full overflow-visible">
                <img
                  alt="The Evergreen Hill Logo"
                  src={Logo}
                  className="size-full object-contain transition-transform duration-200 hover:scale-105 origin-center"
                />
              </div>
            </button>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {rightNavigation.map((item) => (
              <button
                type="button"
                key={item.name}
                onClick={() => handleNavigation(item.key)}
                className="text-sm font-semibold text-white hover:text-teal-600 transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
            <div className="flex items-center justify-between">
              <button type="button" onClick={handleLogoClick} className="-m-1.5 p-1.5 bg-transparent border-none cursor-pointer">
                <span className="sr-only">The Evergreen Hill</span>
                <img
                  alt="The Evergreen Hill Logo"
                  src={Logo}
                  className="h-8 w-auto"
                />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  {[...leftNavigation, ...rightNavigation].map((item) => (
                    <button
                      type="button"
                      key={item.name}
                      onClick={() => {
                        handleNavigation(item.key)
                        setMobileMenuOpen(false)
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50 w-full text-left bg-transparent border-none cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      
      <div className={`h-screen w-full overflow-hidden ${bookFormOpen ? 'blur-sm' : ''} transition-all duration-300`}>
        <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
          {/* Background Image - Fixed to viewport */}
          <img
            alt="Hero Background"
            src={HeroImage}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 -z-10 w-full h-full object-cover object-center"
          />
          
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 -z-5 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          
          {/* Top Gradient Blur Effect - Contained within viewport */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-1/3 transform-gpu overflow-hidden blur-2xl"
          >
            <div className="relative left-1/2 top-0 aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 lg:w-[72rem] [clip-path:polygon(74.1%_44.1%,100%_61.6%,97.5%_26.9%,85.5%_0.1%,80.7%_2%,72.5%_32.5%,60.2%_62.4%,52.4%_68.1%,47.5%_58.3%,45.2%_34.5%,27.5%_76.7%,0.1%_64.9%,17.9%_100%,27.6%_76.8%,76.1%_97.7%,74.1%_44.1%)]" />
          </div>
          
          {/* Main Content Container - Centered in viewport */}
          <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl text-center">
              {/* Welcome Badge - Responsive */}
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="relative rounded-md px-4 py-2 text-xs text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 transition-all duration-300 sm:text-sm md:text-base backdrop-blur-md shadow-lg hover:shadow-xl">
                  Welcome to The Evergreen Hill, Kalaw
                </div>
              </div>
              
              {/* Main Content - Responsive Typography and Spacing */}
              <div className="space-y-4 sm:space-y-6">
                {/* Main Heading - Fully Responsive */}
                <h1 className="text-3xl font-bold tracking-tight text-balance text-white leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Timeless Elegance<br className="hidden sm:inline" />
                  <span className="sm:hidden"> </span>Evergreen Serenity
                </h1>
                
                {/* Description - Responsive */}
                <p className="mx-auto max-w-2xl text-base font-medium text-pretty text-slate-100 leading-relaxed sm:text-lg md:text-xl lg:max-w-3xl">
                  Nestled amidst the pine-covered hills of Kalaw, our colonial-inspired sanctuary offers a perfect blend of classic charm and modern comfort. Unwind, explore, and create timeless memories.
                </p>
                
                {/* Action Buttons - Fully Responsive */}
                <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
                  <button
                    type="button"
                    onClick={() => setBookFormOpen(true)}
                    className="w-full max-w-xs rounded-md bg-teal-800 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all duration-200 sm:w-auto md:px-8 md:py-3.5 md:text-base hover:shadow-xl hover:scale-105"
                  >
                    Book Your Stay
                  </button>
                  <button 
                    type="button"
                    onClick={() => onNavigate?.('gallery')}
                    className="text-sm font-semibold text-white hover:text-teal-800 transition-all duration-200 bg-transparent border-none cursor-pointer sm:text-base md:text-lg hover:scale-105"
                  >
                    View Gallery 
                    <span aria-hidden="true" className="ml-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Gradient Blur Effect - Contained within viewport */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-1/3 transform-gpu overflow-hidden blur-2xl"
          >
            <div className="relative left-1/2 bottom-0 aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 lg:w-[72rem] [clip-path:polygon(74.1%_44.1%,100%_61.6%,97.5%_26.9%,85.5%_0.1%,80.7%_2%,72.5%_32.5%,60.2%_62.4%,52.4%_68.1%,47.5%_58.3%,45.2%_34.5%,27.5%_76.7%,0.1%_64.9%,17.9%_100%,27.6%_76.8%,76.1%_97.7%,74.1%_44.1%)]" />
          </div>
        </div>
      </div>

      {/* Book Form Modal */}
      {bookFormOpen && (
        <BookForm 
          isOpen={bookFormOpen} 
          onClose={() => setBookFormOpen(false)} 
        />
      )}
    </div>
  )
}