<template>
  <main class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <NuxtLink
        to="/"
        class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        <span class="mr-2">←</span>
        Volver al listado
      </NuxtLink>

      <!-- Loading State -->
      <div v-if="pending" class="text-center py-12">
        <div
          class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"
        ></div>
        <p class="text-xl text-gray-600 mt-4">Cargando detalles...</p>
      </div>

      <!-- Error State -->
      <div
        v-else-if="!house"
        class="bg-white rounded-lg shadow-lg p-8 text-center"
      >
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Casa no encontrada
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Lo sentimos, no pudimos encontrar la casa que buscas.
        </p>
        <NuxtLink
          to="/"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Volver al listado
        </NuxtLink>
      </div>

      <!-- House Details -->
      <div v-else class="bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Image -->
        <div class="relative w-full h-96 bg-gray-200">
          <NuxtImg
            :src="`${config.public.apiUrl}${house.image}`"
            :alt="house.name"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content -->
        <div class="p-8">
          <!-- Header -->
          <div class="mb-8">
            <h1 class="text-4xl font-bold text-gray-900 mb-2">
              {{ house.name }}
            </h1>
            <div class="flex items-center gap-2 text-lg text-gray-600">
              <span>📍</span>
              <span>{{ house.location }}</span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            {{ house.description }}
          </p>

          <!-- Features Grid -->
          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b-2"
          >
            <div class="text-center">
              <div class="text-3xl mb-2">🛏️</div>
              <p class="text-gray-600 text-sm">Habitaciones</p>
              <p class="text-2xl font-bold text-gray-900">
                {{ house.bedrooms }}
              </p>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-2">🚿</div>
              <p class="text-gray-600 text-sm">Baños</p>
              <p class="text-2xl font-bold text-gray-900">
                {{ house.bathrooms }}
              </p>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-2">💰</div>
              <p class="text-gray-600 text-sm">Precio por noche</p>
              <p class="text-2xl font-bold text-blue-600">
                ${{ house.pricePerNight }}
              </p>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-2">📅</div>
              <p class="text-gray-600 text-sm">Disponibilidad</p>
              <p class="text-2xl font-bold text-green-600">Disponible</p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button
              class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              ✓ Reservar Ahora
            </button>
            <button
              class="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
            >
              ❤️ Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { House } from '~/types/house'

definePageMeta({
  layout: 'default',
})

const config = useRuntimeConfig()
const route = useRoute()
const { getHouseById } = useHouses()

// Get house ID from route params
const houseId = route.params.id as string

// Fetch house data
const {
  data: house,
  pending,
  error,
} = await useAsyncData<House | null>(`house-${houseId}`, () => {
  if (!houseId) return null
  return getHouseById(houseId)
})

// Set head metadata
useHead({
  title: computed(
    () => `${house.value?.name || 'Casa Rural'} - Alquiler Vacacional`
  ),
  meta: [
    {
      name: 'description',
      content: computed(
        () => house.value?.description || 'Detalle de una casa rural'
      ),
    },
  ],
})

if (error.value) {
  console.error('Error loading house:', error.value)
}
</script>
