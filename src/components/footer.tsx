import { Facebook, Twitter, Instagram, Linkedin, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 w-[100%] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex flex-col items-start space-y-2 mb-6 sm:mb-0">
            <Link href="/" className="text-2xl font-bold">
              LOGO
            </Link>
            <span className="text-sm font-medium">Kaya Planet</span>
            <div className="flex items-center space-x-2 text-sm">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin size={16} />
              <span>123 Eco Street, Green City, 12345</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}