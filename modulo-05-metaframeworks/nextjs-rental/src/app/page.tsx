import { getHouses } from '@/lib/api'
import { HouseCard } from '@/components/HouseCard'

export const metadata = {
  title: 'Casas Rurales - Alquiler Vacacional',
  description: 'Encuentra las mejores casas rurales para tu próximo viaje',
}

export default async function Home() {
  const houses = await getHouses()

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Casas Rurales para Alquilar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre hermosas casas rurales para tu próxima escapada. Elige
            entre una amplia selección de propiedades con todo lo que necesitas.
          </p>
        </div>

        {houses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No hay casas disponibles en este momento.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
