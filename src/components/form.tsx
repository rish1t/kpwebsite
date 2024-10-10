import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    query: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '', email: '', query: '' })
  }

  return (
    <div className="py-[5%] w-[100%] flex items-center justify-center bg-[#f5f5f5] px-4 sm:px-6 lg:px-8">
      <div className="md:w-[60%] w-full space-y-8 bg-white rounded-3xl shadow-lg p-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Get In Touch</h2>
          <p className="text-sm text-gray-500">We would love to hear from you!</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Please enter your Name"
              required
            />
          </div>
          <div className='flex gap-4'>
            <span className='md:w-[25%]'>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                placeholder="+123 456 7890"
                required
              />
            </span>
            <span className='md:w-[75%]'>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email id (Optional)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                placeholder="youremail@gmail.com"
              />
            </span>
          </div>
          <div>
            <Label htmlFor="query" className="text-sm font-medium text-gray-700">Your Message</Label>
            <Textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              rows={4}
              placeholder="Write your message here..."
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#f89134] text-white py-3 px-6 rounded-full hover:bg-orange-500 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition transform hover:-translate-y-1"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
