<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-800 mb-6">⚙️ Configuración</h2>

    <!-- Display Settings -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Info Card -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-bold text-gray-800 mb-4">
          ℹ️ Información de la App
        </h3>
        <div class="space-y-3">
          <div>
            <p class="text-sm text-gray-600">Nombre de la Aplicación</p>
            <p class="text-lg font-semibold text-gray-800">🍽️ Meal Planner</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Versión</p>
            <p class="text-lg font-semibold text-gray-800">1.0.0</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Framework</p>
            <p class="text-lg font-semibold text-gray-800">Vue 3 + Pinia</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Almacenamiento</p>
            <p class="text-lg font-semibold text-gray-800">
              Persistente (localStorage)
            </p>
          </div>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-bold text-gray-800 mb-4">📊 Resumen Rápido</h3>
        <div class="space-y-4">
          <div class="flex justify-between items-center pb-3 border-b">
            <span class="text-gray-700">Total de Platos</span>
            <span class="text-2xl font-bold text-primary">{{
              mealStore.totalMeals
            }}</span>
          </div>
          <div class="flex justify-between items-center pb-3 border-b">
            <span class="text-gray-700">Días Planificados</span>
            <span class="text-2xl font-bold text-primary"
              >{{ daysWithMeals }}/7</span
            >
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-700">Platos Únicos</span>
            <span class="text-2xl font-bold text-primary">{{
              uniqueMeals
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Danger Zone -->
    <div class="bg-red-50 rounded-lg border-l-4 border-red-500 p-6">
      <h3 class="text-xl font-bold text-red-700 mb-4">⚠️ Zona de Peligro</h3>
      <p class="text-gray-700 mb-4">
        Estas acciones son permanentes y no se pueden deshacer. Ten cuidado.
      </p>

      <div class="space-y-3">
        <button
          v-if="mealStore.totalMeals > 0"
          @click="clearAll"
          class="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          🗑️ Eliminar Todos los Platos
        </button>
        <p v-else class="text-gray-500 italic">No hay platos para eliminar</p>

        <button
          @click="resetLocalStorage"
          class="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          🔄 Restablecer Toda la Aplicación
        </button>
      </div>
    </div>

    <!-- Help Section -->
    <div class="mt-8 bg-blue-50 rounded-lg p-6">
      <h3 class="text-xl font-bold text-blue-700 mb-4">
        ❓ Ayuda y Características
      </h3>
      <ul class="space-y-2 text-gray-700">
        <li>✅ Planifica tus comidas semanales con facilidad</li>
        <li>✅ Categoriza por Desayuno, Comida y Cena</li>
        <li>✅ Edita y elimina platos en cualquier momento</li>
        <li>✅ Descubre tus platos favoritos según el historial</li>
        <li>✅ Exporta tu menú semanal para imprimir</li>
        <li>✅ Los datos se guardan automáticamente</li>
        <li>✅ Diseño responsive para móviles y tablets</li>
      </ul>
    </div>

    <!-- About -->
    <div class="mt-8 text-center text-gray-600">
      <p>Creado como parte del laboratorio de Vue 3 - Lemoncode</p>
      <p class="text-sm mt-2">
        👨‍💻 Made with ❤️ using Vue 3, Pinia & Tailwind CSS
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMealStore } from '../stores/mealStore'

const mealStore = useMealStore()

const daysWithMeals = computed(() => {
  return mealStore.mealsByDay.filter((d) => d.meals.length > 0).length
})

const uniqueMeals = computed(() => {
  const uniqueNames = new Set(mealStore.meals.map((m) => m.name))
  return uniqueNames.size
})

const clearAll = () => {
  if (
    confirm(
      '¿Estás seguro de que quieres eliminar TODOS los platos? Esta acción no se puede deshacer.'
    )
  ) {
    mealStore.clearAllMeals()
    alert('✅ Todos los platos han sido eliminados')
  }
}

const resetLocalStorage = () => {
  if (
    confirm(
      '¿Estás seguro de que quieres restablecer toda la aplicación? Esta acción eliminará todos los datos guardados.'
    )
  ) {
    localStorage.clear()
    alert('✅ La aplicación ha sido restablecida. Se recargará la página.')
    window.location.reload()
  }
}
</script>

<style scoped>
:root {
  --color-primary: #10b981;
}

.text-primary {
  color: var(--color-primary);
}
</style>
