import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-blue-500">Qurbani</span>
              <span className="text-emerald-500">Hat</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing a trusted and seamless solution to find healthy, premium animals for your Qurbani. Delivered straight from our farms to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/animals" className="hover:text-emerald-400 transition-colors">All Animals</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Order Tracking</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-center gap-3">
                <span className="text-emerald-500">📍</span> Rajshahi, Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <span className="text-emerald-500">📞</span> +880 1234 567 890
              </p>
              <p className="flex items-center gap-3">
                <span className="text-emerald-500">✉️</span> support@qurbanihat.com
              </p>
            </div>
          </div>

        </div>


        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            Copyright © {new Date().getFullYear()} - All rights reserved by
            <span className="text-emerald-500 font-bold ml-1">QurbaniHat Ltd.</span>
          </p>


          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500 transition-transform hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.221c0-.822.112-1.117 1.14-1.117h2.86v-4.662c-.513-.067-1.295-.115-2.112-.115-2.31 0-3.928 1.118-3.928 3.593v1.522z" /></svg>
            </a>
            <a href="#" className="hover:text-emerald-500 transition-transform hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}