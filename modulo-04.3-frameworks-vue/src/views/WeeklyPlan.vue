<template>
  <div>
    <!-- Stats Bar -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
        <p class="text-gray-600 text-sm font-medium">Total de Platos</p>
        <p class="text-3xl font-bold text-blue-600">
          {{ mealStore.totalMeals }}
        </p>
      </div>
      <div class="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
        <p class="text-gray-600 text-sm font-medium">Días Planificados</p>
        <p class="text-3xl font-bold text-green-600">{{ daysWithMeals }}</p>
      </div>
      <div class="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
        <p class="text-gray-600 text-sm font-medium">Promedio por Día</p>
        <p class="text-3xl font-bold text-purple-600">
          {{ averageMealsPerDay }}
        </p>
      </div>
    </div>

    <!-- Meal Form -->
    <MealForm />

    <!-- Filter Section -->
    <div class="bg-white rounded-lg shadow-md p-4 mb-8">
      <div class="flex flex-wrap gap-3">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="🔍 Buscar platos..."
          class="flex-1 min-w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <select
          v-model="selectedCategory"
          class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Todas las categorías</option>
          <option v-for="cat of mealStore.categories" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>
        <button
          v-if="mealStore.totalMeals > 0"
          @click="exportMenu"
          class="bg-secondary hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          title="Exportar menú"
        >
          📋 Exportar
        </button>
      </div>
    </div>

    <!-- Weekly Plan Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DayCard
        v-for="{ day, meals } of filteredMealsByDay"
        :key="day"
        :day="day"
        :meals="meals"
        @edit="openEditModal"
      />
    </div>

    <!-- Clear All Button -->
    <div v-if="mealStore.totalMeals > 0" class="mt-8 flex justify-center">
      <button
        @click="clearAll"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
      >
        🗑️ Limpiar Todo
      </button>
    </div>

    <!-- Edit Modal -->
    <EditMealModal ref="editModal" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMealStore, type Meal } from '../stores/mealStore'
import MealForm from '../components/MealForm.vue'
import DayCard from '../components/DayCard.vue'
import EditMealModal from '../components/EditMealModal.vue'

const mealStore = useMealStore()
const editModal = ref<InstanceType<typeof EditMealModal>>()

const searchQuery = ref('')
const selectedCategory = ref('')

const daysWithMeals = computed(() => {
  return mealStore.mealsByDay.filter((d) => d.meals.length > 0).length
})

const averageMealsPerDay = computed(() => {
  if (daysWithMeals.value === 0) return '0'
  return (mealStore.totalMeals / daysWithMeals.value).toFixed(1)
})

const filteredMealsByDay = computed(() => {
  return mealStore.mealsByDay.map((dayData) => {
    let filtered = dayData.meals

    if (searchQuery.value) {
      filtered = filtered.filter((meal) =>
        meal.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    }

    if (selectedCategory.value) {
      filtered = filtered.filter(
        (meal) => meal.category === selectedCategory.value
      )
    }

    return {
      day: dayData.day,
      meals: filtered,
    }
  })
})

const openEditModal = (meal: Meal) => {
  editModal.value?.openModal(meal)
}

const clearAll = () => {
  if (
    confirm(
      '¿Estás seguro de que quieres eliminar TODOS los platos? Esta acción no se puede deshacer.'
    )
  ) {
    mealStore.clearAllMeals()
  }
}

const exportMenu = () => {
  let exportText = '📅 PLAN SEMANAL DE COMIDAS\n'
  exportText += '='.repeat(40) + '\n\n'

  let hasMeals = false
  mealStore.mealsByDay.forEach(({ day, meals }) => {
    const filtered = meals.filter((meal) => {
      if (
        searchQuery.value &&
        !meal.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      ) {
        return false
      }
      if (selectedCategory.value && meal.category !== selectedCategory.value) {
        return false
      }
      return true
    })

    if (filtered.length > 0) {
      hasMeals = true
      exportText += `📌 ${day}\n`
      exportText += '-'.repeat(40) + '\n'
      filtered.forEach((meal) => {
        const icon =
          meal.category === 'Desayuno'
            ? '🌅'
            : meal.category === 'Comida'
              ? '🍽️'
              : '🌙'
        exportText += `  ${icon} ${meal.name} (${meal.category})\n`
      })
      exportText += '\n'
    }
  })

  if (!hasMeals) {
    alert('No hay platos para exportar')
    return
  }

  exportText += '='.repeat(40) + '\n'
  exportText += `Total de platos: ${mealStore.totalMeals}\n`
  exportText += `Generado: ${new Date().toLocaleDateString('es-ES')}\n`

  // Copy to clipboard
  navigator.clipboard
    .writeText(exportText)
    .then(() => {
      alert('✅ Menú copiado al portapapeles')
    })
    .catch(() => {
      // Fallback: show in alert
      alert(exportText)
    })
}
</script>

<style scoped>
:root {
  --color-primary: #10b981;
  --color-secondary: #8b5cf6;
}

.bg-secondary {
  background-color: var(--color-secondary);
}

.hover\:bg-purple-700:hover {
  background-color: #6d28d9;
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--color-primary);
}
</style>
