import Breadcrumbs from '../Layout/Breadcrumbs'
import FaqsImg from '../../assets/FAQs/faqs_img.jpg'

interface FAQsProps {
    onNavigate?: (page: string) => void
}

export default function FAQs({ onNavigate }: FAQsProps) {
    const breadcrumbPages = [
        { name: 'FAQs', href: '#faqs', current: true }
    ]

  return (
    <div className="bg-white">
      <div className="relative bg-slate-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            alt="FAQs Banner"
            src={FaqsImg}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="size-full object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-slate-900 opacity-50" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
            <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
        </div>
      </div>
    </div>
  )
}