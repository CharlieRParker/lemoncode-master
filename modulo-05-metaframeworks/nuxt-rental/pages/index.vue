<template>
  <main
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <div class="mb-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Casas Rurales para Alquilar
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre hermosas casas rurales para tu próxima escapada. Elige entre
          una amplia selección de propiedades con todo lo que necesitas.
        </p>
      </div>

      <div v-if="pending" class="text-center py-12">
        <div
          class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"
        ></div>
        <p class="text-xl text-gray-600 mt-4">Cargando casas...</p>
      </div>

      <div
        v-else-if="houses && houses.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <HouseCard v-for="house in houses" :key="house.id" :house="house" />
      </div>

      <div v-else class="text-center py-12">
        <p class="text-xl text-gray-600">
          No hay casas disponibles en este momento.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useHouses } from '~/composables/useHouses'
import type { House } from '~/types/house'

definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Casas Rurales - Alquiler Vacacional',
  meta: [
    {
      name: 'description',
      content: 'Encuentra las mejores casas rurales para tu próximo viaje',
    },
  ],
})

const { getHouses } = useHouses()

const {
  data: houses,
  pending,
  error,
} = await useAsyncData<House[]>('houses', () => getHouses())

if (error.value) {
  console.error('Error loading houses:', error.value)
}
</script>
