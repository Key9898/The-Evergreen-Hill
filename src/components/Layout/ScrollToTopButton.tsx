import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-gradient-to-br from-teal-800/70 via-emerald-800/75 to-teal-800/70 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:scale-110 hover:shadow-xl hover:from-teal-700/70 hover:via-emerald-700/75 hover:to-teal-700/70 transition-all duration-200 transform ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUpIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
    )
}