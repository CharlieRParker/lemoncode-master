<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-primary"
  >
    <div class="bg-gradient-to-r from-primary to-green-600 px-4 py-3">
      <h3 class="text-xl font-bold text-white">{{ day }}</h3>
      <p class="text-green-100 text-sm">{{ meals.length }} platos</p>
    </div>

    <div class="p-4">
      <div v-if="meals.length === 0" class="text-center py-8">
        <p class="text-gray-400 text-sm">
          No hay platos planificados para este día
        </p>
      </div>

      <div v-else class="space-y-3">
        <div
          v-for="meal of meals"
          :key="meal.id"
          class="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div class="flex-1">
            <p class="font-semibold text-gray-800">{{ meal.name }}</p>
            <p class="text-xs text-gray-500">
              {{ getCategoryIcon(meal.category) }} {{ meal.category }}
            </p>
          </div>
          <div class="flex gap-2">
            <button
              @click="editMeal(meal)"
              class="text-blue-500 hover:text-blue-700 transition-colors"
              title="Editar plato"
            >
              ✏️
            </button>
            <button
              @click="deleteMeal(meal.id)"
              class="text-red-500 hover:text-red-700 transition-colors"
              title="Eliminar plato"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMealStore, type Meal } from '../stores/mealStore'

defineProps<{
  day: string
  meals: Meal[]
}>()

const emit = defineEmits<{
  edit: [meal: Meal]
}>()

const mealStore = useMealStore()

const deleteMeal = (id: string) => {
  if (confirm('¿Estás seguro de que quieres eliminar este plato?')) {
    mealStore.removeMeal(id)
  }
}

const editMeal = (meal: Meal) => {
  emit('edit', meal)
}

const getCategoryIcon = (category: string): string => {
  const icons: { [key: string]: string } = {
    Desayuno: '🌅',
    Comida: '🍽️',
    Cena: '🌙',
  }
  return icons[category] || '🍽️'
}
</script>

<style scoped>
:root {
  --color-primary: #10b981;
}

.border-primary {
  border-color: var(--color-primary);
}

.from-primary {
  --tw-gradient-from: var(--color-primary);
}

.to-green-600 {
  --tw-gradient-to: #16a34a;
}
</style>
