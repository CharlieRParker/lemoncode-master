<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-800 mb-6">⭐ Platos Favoritos</h2>

    <div
      v-if="mealStore.favoriteMeals.length === 0"
      class="bg-white rounded-lg shadow-md p-12 text-center"
    >
      <p class="text-gray-500 text-lg mb-4">No tienes platos favoritos aún</p>
      <p class="text-gray-400">
        Empieza a planificar comidas para descubrir tus platos favoritos
      </p>
      <router-link
        to="/"
        class="inline-block mt-4 bg-primary hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
      >
        Ir al Plan Semanal
      </router-link>
    </div>

    <div v-else class="space-y-4">
      <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 mb-6">
        <p class="text-gray-600 text-sm">
          ℹ️ Los platos se consideran favoritos según el número de veces que
          aparecen en tu plan semanal
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(favorite, index) of mealStore.favoriteMeals"
          :key="favorite.name"
          class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4"
          :class="getBorderColor(index)"
        >
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-bold text-gray-800">
              {{ getMedalEmoji(index) }} {{ favorite.name }}
            </h3>
            <span
              class="text-sm font-semibold px-3 py-1 rounded-full"
              :class="getBadgeClass(index)"
            >
              {{ favorite.count }} {{ favorite.count === 1 ? 'vez' : 'veces' }}
            </span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="h-2 rounded-full transition-all"
              :class="getBarColor(index)"
              :style="{
                width:
                  (favorite.count / (mealStore.favoriteMeals[0]?.count || 1)) *
                    100 +
                  '%',
              }"
            />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mt-8">
        <h3 class="text-xl font-bold text-gray-800 mb-4">📊 Estadísticas</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
            <p class="text-gray-600 text-sm font-medium">Platos Únicos</p>
            <p class="text-3xl font-bold text-green-600">
              {{ mealStore.favoriteMeals.length }}
            </p>
          </div>
          <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
            <p class="text-gray-600 text-sm font-medium">Más Popular</p>
            <p class="text-2xl font-bold text-purple-600">
              {{ mealStore.favoriteMeals[0]?.name || 'N/A' }}
            </p>
          </div>
          <div class="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
            <p class="text-gray-600 text-sm font-medium">Total de Comidas</p>
            <p class="text-3xl font-bold text-orange-600">
              {{ mealStore.totalMeals }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMealStore } from '../stores/mealStore'

const mealStore = useMealStore()

const getMedalEmoji = (index: number) => {
  if (index === 0) return '🥇'
  if (index === 1) return '🥈'
  if (index === 2) return '🥉'
  return `#${index + 1}`
}

const getBorderColor = (index: number) => {
  if (index === 0) return 'border-yellow-500'
  if (index === 1) return 'border-gray-400'
  if (index === 2) return 'border-orange-600'
  return 'border-blue-500'
}

const getBadgeClass = (index: number) => {
  if (index === 0) return 'bg-yellow-200 text-yellow-800'
  if (index === 1) return 'bg-gray-300 text-gray-800'
  if (index === 2) return 'bg-orange-200 text-orange-800'
  return 'bg-blue-200 text-blue-800'
}

const getBarColor = (index: number) => {
  if (index === 0) return 'bg-yellow-400'
  if (index === 1) return 'bg-gray-400'
  if (index === 2) return 'bg-orange-400'
  return 'bg-blue-400'
}
</script>

<style scoped>
:root {
  --color-primary: #10b981;
}

.bg-primary {
  background-color: var(--color-primary);
}

.hover\:bg-green-700:hover {
  background-color: #047857;
}
</style>
