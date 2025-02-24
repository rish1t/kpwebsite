import { Instagram, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import kp from '../../public/kayaplanetlogo.png'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 w-full border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-start space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={kp}
                alt="Kaya Planet"
                width={150}
                height={150}
                className=""
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
              <div className="flex items-center space-x-3 text-sm group">
                <Phone size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">+91 99994 24375</span>
              </div>
              <div className="flex items-start space-x-3 text-sm group">
                <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="flex-1 group-hover:text-white transition-colors">125/53-B, opp. Viva Natraj, Lal Quarter, Govind Nagar, Kanpur, Uttar Pradesh</span>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/kayaplanetbeautysalon/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}