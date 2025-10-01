import Link from 'next/link'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-walnut rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">
                  The Modern Estate
                </h3>
                <p className="text-sm text-gray-300 -mt-1">
                  Research, financing, and tech for modern homes in New Jersey and New York
                </p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted source for expert insights on modern residential design, 
              New Jersey and New York real estate practices, financing strategies, and cutting-edge 
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/modern-design" className="text-gray-300 hover:text-white transition-colors">
                  Modern Design
                </Link>
              </li>
              <li>
                <Link href="/category/nj-real-estate" className="text-gray-300 hover:text-white transition-colors">
                  NJ/NY Real Estate
                </Link>
              </li>
              <li>
                <Link href="/category/financing" className="text-gray-300 hover:text-white transition-colors">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="/category/technology" className="text-gray-300 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Princeton, New Jersey, USA</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>hello@roobatech.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The Modern Estate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

