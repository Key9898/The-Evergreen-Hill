import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import ReviewsBanner from './ReviewsBanner'
import ReviewsPagination from './ReviewsPagination'
import ReviewsForm from './ReviewsForm'
import type { ReviewFormData } from './ReviewsForm'

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

interface GuestReviewsProps {
  onNavigate?: (page: string) => void
}

// Month name parsing
const MONTHS: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  auguest: 7, // tolerate typo
  september: 8,
  october: 9,
  november: 10,
  december: 11,
}

function parseReviewDate(dateStr?: string): number {
  if (!dateStr) return 0
  // ISO date (from <input type="date">): YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const t = new Date(dateStr).getTime()
    return Number.isNaN(t) ? 0 : t
  }
  // "Month DD, YYYY"
  const m = dateStr.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/)
  if (m) {
    const monthName = m[1].toLowerCase()
    const day = Number(m[2])
    const year = Number(m[3])
    const month = MONTHS[monthName]
    if (month !== undefined) {
      const t = new Date(year, month, day).getTime()
      return Number.isNaN(t) ? 0 : t
    }
  }
  // Fallback
  const t = new Date(dateStr).getTime()
  return Number.isNaN(t) ? 0 : t
}

export default function GuestReviews({ onNavigate }: GuestReviewsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [featured, setFeatured] = useState(() => {
    const saved = localStorage.getItem('eh_featured_reviews')
    if (saved) {
      try {
        const list = JSON.parse(saved)
        // Form submissions only: ISO date from <input type="date">
        return Array.isArray(list)
          ? list.filter((r: { date?: string }) => typeof r?.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(r.date))
          : []
      } catch {
        return []
      }
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('eh_featured_reviews', JSON.stringify(featured))
  }, [featured])

  const handleAddReview = (data: ReviewFormData) => {
    setFeatured((prev: typeof featured) => {
      const nextId = (prev.reduce((m: number, r: { id?: number }) => Math.max(m, r.id ?? 0), 0) || 0) + 1
      const avatarSrc =
        data.avatarDataUrl ||
        (data.avatarFile ? URL.createObjectURL(data.avatarFile) : null)
      const newReview = {
        id: nextId,
        rating: data.rating,
        content: `<p>${data.content}</p>`,
        author: data.name,
        country: data.country,
        roomType: data.roomType,
        date: data.date,
        avatarSrc,
      }
      return [newReview, ...prev]
    })
    setIsFormOpen(false)
  }

  // Month name parsing (typo 'Auguest' ကိုလည်းလက်ခံ)
  // Sort by date (newest → oldest)
  const featuredSorted = [...featured].sort(
    (a, b) => parseReviewDate(b.date) - parseReviewDate(a.date)
  )

  // Reviews data for pagination
  const filteredFiles = featuredSorted

  // Calculate pagination
  const totalItems = filteredFiles.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredFiles.slice(startIndex, endIndex)

  // Real-time review stats (derived from featured)
  const totalCount = featuredSorted.length
  const averageRating = totalCount
    ? featuredSorted.reduce((sum, r) => sum + r.rating, 0) / totalCount
    : 0
  const countsByRating = [5, 4, 3, 2, 1].map((r) => ({
    rating: r,
    count: featuredSorted.filter((rev) => rev.rating === r).length,
  }))

  return (
    <div className="min-h-screen -mt-5">
      {/* Header + Banner */}
      <Header onNavigate={onNavigate} activePage="ourStory" />
      <div className="relative -mt-20 sm:-mt-24">
        <ReviewsBanner onNavigate={onNavigate} />
      </div>

      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 border-b border-slate-200">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
            Stories From Our Guests
          </h2>
          <p className="mt-3 text-lg/8 text-slate-700 max-w-3xl mx-auto">
            Our greatest measure of success is the memories our guests take with them. Discover the authentic experiences shared by travelers who made us their home in Kalaw.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:max-w-7xl sm:px-6 sm:py-16 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-16">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-teal-700">Guest Reviews</h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      averageRating > rating ? 'text-yellow-400' : 'text-slate-300',
                      'size-5 shrink-0',
                    )}
                  />
                ))}
              </div>
              <p className="sr-only">{averageRating} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-slate-900">Based on {totalCount} reviews</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {countsByRating.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-slate-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                      <StarIcon
                        aria-hidden="true"
                        className={classNames(count.count > 0 ? 'text-yellow-400' : 'text-slate-300', 'size-5 shrink-0')}
                      />
                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-slate-200 bg-slate-100" />
                        {count.count > 0 ? (
                          <div
                            style={{ width: `calc(${count.count} / ${totalCount} * 100%)` }}
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm text-slate-900 tabular-nums">
                    {totalCount > 0 ? Math.round((count.count / totalCount) * 100) : 0}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-medium text-teal-600">Share Your Evergreen Story</h3>
            <p className="mt-1 text-base text-slate-700">
              Have you recently stayed with us? We'd be grateful to hear about your experience. Your feedback helps other travelers and allows us to grow.
            </p>

            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-slate-50 px-8 py-2 text-base font-medium text-slate-900 hover:bg-teal-50 sm:w-auto lg:w-full"
            >
              Write a review
            </button>
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-slate-200">
              {currentItems.map((review) => {
                const displayAuthor = review.author
                const origin = review.country

                return (
                  <div key={review.id} className="py-12">
                    <div className="flex items-center">
                      {typeof review.avatarSrc === 'string' && review.avatarSrc.trim() ? (
                        <img
                          alt={`${review.author}.`}
                          src={review.avatarSrc}
                          className="size-12 rounded-md"
                        />
                      ) : (
                        <div className="size-12 rounded-md bg-slate-100 flex items-center justify-center">
                          <UserCircleIcon className="size-8 text-slate-400" />
                        </div>
                      )}
                      <div className="ml-4">
                        {/* Author + Country pill + RoomType (inline, responsive) */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h4 className="text-base font-bold text-slate-900">{displayAuthor}</h4>
                          {origin ? (
                            <span className="inline-flex items-center rounded-md bg-teal-50 hover:teal-100 px-2.5 py-1 text-base font-medium text-slate-700">
                              {origin}
                            </span>
                          ) : null}
                          {review.roomType ? (
                            <span className="inline-flex items-center rounded-md bg-teal-50 hover:teal-100 px-2.5 py-1 text-base font-medium text-slate-700"> 
                              {review.roomType}
                            </span>
                          ) : null}
                        </div>

                        <div className="mt-1 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                review.rating > rating ? 'text-yellow-400' : 'text-slate-300',
                                'size-5 shrink-0',
                              )}
                            />
                          ))}
                          {review.date ? (
                            <span className="ml-3 text-base text-slate-700 leading-5">{review.date}</span>
                          ) : null}
                        </div>
                        <p className="sr-only">{review.rating} out of 5 stars</p>
                      </div>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                      className="mt-4 space-y-6 text-base text-slate-700"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <ReviewsPagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage}
        totalPosts={filteredFiles.length} 
        postsPerPage={itemsPerPage} 
      />

      {/* Popup form (move inside the component) */}
      <ReviewsForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddReview}
      />

      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}