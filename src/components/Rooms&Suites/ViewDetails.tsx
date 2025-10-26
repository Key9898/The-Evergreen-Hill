import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import BookForm from '../../components/Layout/BookForm'
import { useState, useEffect } from 'react'
import DeluxeGardenViewDetailsImgOne from '../../assets/Rooms&Suites/deluxe_garden_view_details_img_one.jpg'
import DeluxeGardenViewDetailsImgTwo from '../../assets/Rooms&Suites/deluxe_garden_view_details_img_two.jpg'
import DeluxeGardenViewDetailsImgThree from '../../assets/Rooms&Suites/deluxe_garden_view_details_img_three.jpg'
import DeluxeGardenViewDetailsImgFour from '../../assets/Rooms&Suites/deluxe_garden_view_details_img_four.jpg'
import DeluxeMountainViewDetailsImgOne from '../../assets/Rooms&Suites/deluxe_mountain_view_details_img_one.jpg'
import DeluxeMountainViewDetailsImgTwo from '../../assets/Rooms&Suites/deluxe_mountain_view_details_img_two.jpg'
import DeluxeMountainViewDetailsImgThree from '../../assets/Rooms&Suites/deluxe_mountain_view_details_img_three.jpg'
import DeluxeMountainViewDetailsImgFour from '../../assets/Rooms&Suites/deluxe_mountain_view_details_img_four.jpg'
import HoneymoonSuiteViewDetailsImgOne from '../../assets/Rooms&Suites/honeymoon_suite_view_details_one.jpg'
import HoneymoonSuiteViewDetailsImgTwo from '../../assets/Rooms&Suites/honeymoon_suite_view_details_two.jpg'
import HoneymoonSuiteViewDetailsImgThree from '../../assets/Rooms&Suites/honeymoon_suite_view_details_three.jpg'
import HoneymoonSuiteViewDetailsImgFour from '../../assets/Rooms&Suites/honeymoon_suite_view_details_four.jpg'
import TheEvergreenHillSuiteViewDetailsImgOne from '../../assets/Rooms&Suites/the_evergreen_hill_suite_view_details_one.jpg'
import TheEvergreenHillSuiteViewDetailsImgTwo from '../../assets/Rooms&Suites/the_evergreen_hill_suite_view_details_two.jpg'
import TheEvergreenHillSuiteViewDetailsImgThree from '../../assets/Rooms&Suites/the_evergreen_hill_suite_view_details_three.jpg'
import TheEvergreenHillSuiteViewDetailsImgFour from '../../assets/Rooms&Suites/the_evergreen_hill_suite_view_details_four.jpg'
import DeluxeTwinGardenViewDetailsImgOne from '../../assets/Rooms&Suites/deluxe_twin_garden_view_details_img_one.jpg'
import DeluxeTwinGardenViewDetailsImgTwo from '../../assets/Rooms&Suites/deluxe_twin_garden_view_details_img_two.jpg'
import DeluxeTwinGardenViewDetailsImgThree from '../../assets/Rooms&Suites/deluxe_twin_garden_view_details_img_three.jpg'
import DeluxeTwinGardenViewDetailsImgFour from '../../assets/Rooms&Suites/deluxe_twin_garden_view_details_img_four.jpg'
import DeluxeTwinMountainViewDetailsImgOne from '../../assets/Rooms&Suites/deluxe_twin_mountain_view_details_img_one.jpg'
import DeluxeTwinMountainViewDetailsImgTwo from '../../assets/Rooms&Suites/deluxe_twin_mountain_view_details_img_two.jpg'
import DeluxeTwinMountainViewDetailsImgThree from '../../assets/Rooms&Suites/deluxe_twin_mountain_view_details_img_three.jpg'
import DeluxeTwinMountainViewDetailsImgFour from '../../assets/Rooms&Suites/deluxe_twin_mountain_view_details_img_four.jpg'
import FamilySuiteViewDetailsImgOne from '../../assets/Rooms&Suites/family_suite_view_details_one.jpg'
import FamilySuiteViewDetailsImgTwo from '../../assets/Rooms&Suites/family_suite_view_details_two.jpg'
import FamilySuiteViewDetailsImgThree from '../../assets/Rooms&Suites/family_suite_view_details_three.jpg'
import FamilySuiteViewDetailsImgFour from '../../assets/Rooms&Suites/family_suite_view_details_four.jpg'
import ExecutiveSuiteViewDetailsImgOne from '../../assets/Rooms&Suites/executive_suite_view_details_one.jpg'
import ExecutiveSuiteViewDetailsImgTwo from '../../assets/Rooms&Suites/executive_suite_view_details_two.jpg'
import ExecutiveSuiteViewDetailsImgThree from '../../assets/Rooms&Suites/executive_suite_view_details_three.jpg'
import ExecutiveSuiteViewDetailsImgFour from '../../assets/Rooms&Suites/executive_suite_view_details_four.jpg'

interface ViewDetailsProps {
  open: boolean
  onClose: () => void
  room: { name?: string; gallery?: string[] } | null
  onBookNow?: (roomName?: string) => void
}

// Room name အလိုက် gallery mapping
const galleryByRoomName: Record<string, string[]> = {
  'deluxe garden view': [
    DeluxeGardenViewDetailsImgOne,
    DeluxeGardenViewDetailsImgTwo,
    DeluxeGardenViewDetailsImgThree,
    DeluxeGardenViewDetailsImgFour,
  ],
  'deluxe mountain view': [
    DeluxeMountainViewDetailsImgOne,
    DeluxeMountainViewDetailsImgTwo,
    DeluxeMountainViewDetailsImgThree,
    DeluxeMountainViewDetailsImgFour,
  ],
  'honeymoon suite': [
    HoneymoonSuiteViewDetailsImgOne,
    HoneymoonSuiteViewDetailsImgTwo,
    HoneymoonSuiteViewDetailsImgThree,
    HoneymoonSuiteViewDetailsImgFour,
  ],
  'the evergreen hill suite': [
    TheEvergreenHillSuiteViewDetailsImgOne,
    TheEvergreenHillSuiteViewDetailsImgTwo,
    TheEvergreenHillSuiteViewDetailsImgThree,
    TheEvergreenHillSuiteViewDetailsImgFour,
  ],
  'deluxe twin garden view': [
    DeluxeTwinGardenViewDetailsImgOne,
    DeluxeTwinGardenViewDetailsImgTwo,
    DeluxeTwinGardenViewDetailsImgThree,
    DeluxeTwinGardenViewDetailsImgFour,
  ],
  'deluxe twin mountain view': [
    DeluxeTwinMountainViewDetailsImgOne,
    DeluxeTwinMountainViewDetailsImgTwo,
    DeluxeTwinMountainViewDetailsImgThree,
    DeluxeTwinMountainViewDetailsImgFour,
  ],
  'family suite': [
    FamilySuiteViewDetailsImgOne,
    FamilySuiteViewDetailsImgTwo,
    FamilySuiteViewDetailsImgThree,
    FamilySuiteViewDetailsImgFour,
  ],
  'executive suite': [
    ExecutiveSuiteViewDetailsImgOne,
    ExecutiveSuiteViewDetailsImgTwo,
    ExecutiveSuiteViewDetailsImgThree,
    ExecutiveSuiteViewDetailsImgFour,
  ],
}

export default function ViewDetails({ open, onClose, room, onBookNow }: ViewDetailsProps) {
  const nameKey = (room?.name ?? '').toLowerCase().trim()
  const images =
    Array.isArray(room?.gallery) && (room?.gallery?.length ?? 0) > 0
      ? room!.gallery!
      : galleryByRoomName[nameKey] ?? []

  // BookForm open state
  const [bookFormOpen, setBookFormOpen] = useState(false)

  // BookForm usage အတွက် လိုအပ်တဲ့ states
  type Booking = {
    roomName: string
    checkIn: string
    checkOut: string
    adults?: number
    children?: number
    rooms: number
  }
  const [selectedRoom, setSelectedRoom] = useState<string>(room?.name ?? '')
  const [bookings, setBookings] = useState<Booking[]>([])

  // room ပြောင်းလဲသည့်အခါ selectedRoom ကို sync
  useEffect(() => {
    setSelectedRoom(room?.name ?? '')
  }, [room?.name])

  // bookings ပြောင်းလဲတိုင်း localStorage ကို sync (bookings ကို read သုံးခြင်း)
  useEffect(() => {
    try {
      localStorage.setItem('eh_bookings_cache', JSON.stringify(bookings))
    } catch {
    }
  }, [bookings])

  // room name မလာတဲ့အချိန် fallback အနေနဲ့ နောက်ဆုံး booking ရဲ့ roomName ကို auto-select
  useEffect(() => {
    if (!room?.name && bookings.length > 0) {
      const last = bookings[bookings.length - 1]
      if (last?.roomName) {
        setSelectedRoom(last.roomName)
      }
    }
  }, [bookings, room?.name])

  return (
    <>
      <Dialog open={open} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="mx-auto max-w-3xl w-full bg-slate-50 rounded-md shadow-lg overflow-hidden max-h-[85vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">{room?.name ?? 'Room Details'}</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                aria-label="Close details"
                title="Close"
              >
                <span className="sr-only">Close details</span>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
  
            {/* Image Gallery */}
            <div className="px-4 lg:px-6 pt-4 pb-4 lg:pt-6 lg:pb-6 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {(images.length ? images.slice(0, 4) : []).map((src, idx) => (
                  <div key={idx} className="rounded-md overflow-hidden">
                    <div className="aspect-[3/2] sm:aspect-[4/3] w-full">
                      <img
                        src={src}
                        alt={`${room?.name ?? 'Room'} ${idx + 1}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                    </div>
                  </div>
                ))}
                {!images.length && (
                  <div className="col-span-2 text-center text-slate-500 py-12">
                    No images available for this room.
                  </div>
                )}
              </div>
            </div>
  
            {/* Actions: Cancel / Book Now */}
            <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50"
                aria-label="Cancel"
                title="Cancel"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onBookNow?.(room?.name)
                  setSelectedRoom(room?.name ?? '')    
                  setBookFormOpen(true)                
                }}
                className="px-6 py-2 text-sm font-medium text-white bg-teal-700 rounded-md hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Book Now"
                title="Book Now"
              >
                Book Now
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Book Form Modal */}
      {bookFormOpen && (
        <BookForm 
          isOpen={bookFormOpen} 
          onClose={() => setBookFormOpen(false)} 
          defaultRoomType={selectedRoom}
          onBookingSaved={(booking) => {
          setBookings(prev => [...prev, booking])
          }}
        />
      )}
    </>
  )
}