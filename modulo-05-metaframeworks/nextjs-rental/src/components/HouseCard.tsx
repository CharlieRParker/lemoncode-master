'use client'

import Image from 'next/image'
import Link from 'next/link'
import { House } from '@/types/house'

interface HouseCardProps {
  house: House
}

export function HouseCard({ house }: HouseCardProps) {
  return (
    <Link href={`/houses/${house.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <div className="relative w-full h-48">
          <Image
            src={house.image}
            alt={house.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{house.name}</h2>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {house.description}
          </p>
          <div className="flex gaps-2 text-sm text-gray-500 mb-4">
            <span className="flex items-center">📍 {house.location}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 text-sm">
              <span>🛏️ {house.bedrooms} hab.</span>
              <span>🚿 {house.bathrooms} baños</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-blue-600">
              ${house.pricePerNight}
            </span>
            <span className="text-xs text-gray-500">/noche</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
