import Image from 'next/image'
import Link from 'next/link'
import { getHouseById, getHouseIds } from '@/lib/api'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  const ids = await getHouseIds()
  return ids.map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const house = await getHouseById(id)
  return {
    title: house ? `${house.name} - Alquiler Vacacional` : 'Casa Rural',
    description: house?.description || 'Detalle de una casa rural',
  }
}

export default async function HouseDetailPage({ params }: PageProps) {
  const { id } = await params
  const house = await getHouseById(id)

  if (!house) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Casa no encontrada
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Lo sentimos, no pudimos encontrar la casa que buscas.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al listado
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <span className="mr-2">←</span>
          Volver al listado
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Imagen principal */}
          <div className="relative w-full h-96">
            <Image
              src={house.image}
              alt={house.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Contenido */}
          <div className="p-8">
            {/* Encabezado */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {house.name}
              </h1>
              <div className="flex items-center gap-2 text-lg text-gray-600">
                <span>📍</span>
                <span>{house.location}</span>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {house.description}
            </p>

            {/* Grid de características */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b-2">
              <div className="text-center">
                <div className="text-3xl mb-2">🛏️</div>
                <p className="text-gray-600 text-sm">Habitaciones</p>
                <p className="text-2xl font-bold text-gray-900">
                  {house.bedrooms}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚿</div>
                <p className="text-gray-600 text-sm">Baños</p>
                <p className="text-2xl font-bold text-gray-900">
                  {house.bathrooms}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <p className="text-gray-600 text-sm">Precio por noche</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${house.pricePerNight}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📅</div>
                <p className="text-gray-600 text-sm">Disponibilidad</p>
                <p className="text-2xl font-bold text-green-600">Disponible</p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                ✓ Reservar Ahora
              </button>
              <button className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
                ❤️ Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
