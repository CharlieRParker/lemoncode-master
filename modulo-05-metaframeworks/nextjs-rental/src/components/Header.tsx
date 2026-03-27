'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🏡</span>
          <span className="font-bold text-xl text-gray-900">RuralStays</span>
        </Link>
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Inicio
          </Link>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  )
}
