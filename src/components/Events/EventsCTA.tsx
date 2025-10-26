import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import EventsForm from './EventsForm'
import EventsCTAImg from '../../assets/Events/events_cta.jpg'

const benefits = [
  'Dedicated Event Planner',
  'Custom Catering Menus',
  'Audiovisual Equipment',
  'Special Accommodation Rates for Guests',
]

export default function EventsCTA() {
  const [openForm, setOpenForm] = useState(false)

  return (
    <>
      {/* Form modal (top-level မှာထားပြီး clipping မဖြစ်အောင်) */}
      <EventsForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={() => setOpenForm(false)}
      />
      <div className="overflow-hidden bg-white py-16 pt-0 sm:py-16 sm:pt-0 lg:py-16 lg:pt-0">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-12 bg-slate-50 px-7 py-16 rounded-md shadow-lg ring-1 ring-inset ring-slate-900/5 sm:mx-auto sm:max-w-none sm:gap-12 sm:py-16 lg:gap-16 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-16 xl:gap-x-16 xl:px-16">
              <img
                alt="Events CTA"
                src={EventsCTAImg}
                className="h-96 w-full flex-none rounded-md object-cover lg:aspect-square lg:h-auto lg:max-w-sm"
              />
              <div className="w-full flex-auto">
                <h2 className="text-4xl font-semibold text-teal-700 tracking-tight">
                  Let's Create Your Unforgettable Event
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-slate-700">
                  From the initial concept to the final toast, our experienced event planners are here to bring your vision to life. We handle all the details so you can focus on creating lasting memories.
                </p>
                <ul
                  role="list"
                  className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-slate-950 sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none text-teal-700" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 lg:mt-0 flex">
                  <button
                    type="button"
                    onClick={() => setOpenForm(true)}
                    className="text-sm/6 font-semibold text-teal-600 hover:text-teal-500"
                  >
                    Inquire Now
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}