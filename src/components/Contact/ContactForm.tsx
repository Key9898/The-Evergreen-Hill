import { useState } from 'react'

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add actual form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
              Email Address
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="youremail@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="block text-sm font-semibold text-slate-900">
              Subject
            </label>
            <div className="mt-2.5">
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
              >
                <option value="" disabled selected>Select a subject</option>
                <option value="Reservations">Reservations</option>
                <option value="Concierge Services">Concierge Services</option>
                <option value="Events & Celebrations">Events & Celebrations</option>
                <option value="Spa & Wellness">Spa & Wellness</option>
                <option value="Activities">Activities</option>
                <option value="General Inquiries">General Inquiries</option> 
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder="Share your thoughts or questions with us..."
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-teal-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-600 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}