<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
  >
    <div class="bg-white rounded-lg shadow-lg max-w-md w-full">
      <div class="bg-primary px-6 py-4">
        <h2 class="text-xl font-bold text-white">✏️ Editar Plato</h2>
      </div>

      <form @submit.prevent="submitEdit" class="p-6 space-y-4">
        <!-- Meal Name -->
        <div>
          <label
            for="editMealName"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Nombre del plato
          </label>
          <input
            id="editMealName"
            v-model="formData.name"
            type="text"
            placeholder="Ej: Pasta Carbonara"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <!-- Day of Week -->
        <div>
          <label
            for="editMealDay"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Día de la semana
          </label>
          <select
            id="editMealDay"
            v-model="formData.day"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Selecciona un día</option>
            <option v-for="day of dayOrder" :key="day" :value="day">
              {{ day }}
            </option>
          </select>
        </div>

        <!-- Meal Category -->
        <div>
          <label
            for="editMealCategory"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Categoría
          </label>
          <select
            id="editMealCategory"
            v-model="formData.category"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Selecciona una categoría</option>
            <option
              v-for="category of categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>

        <div class="flex gap-3 pt-4">
          <button
            type="button"
            @click="closeModal"
            class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="flex-1 bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useMealStore, type Meal } from '../stores/mealStore'

const mealStore = useMealStore()
const { dayOrder, categories } = mealStore

const isOpen = ref(false)
const currentMeal = ref<Meal | null>(null)

const formData = reactive({
  name: '',
  day: '',
  category: '',
})

const openModal = (meal: Meal) => {
  currentMeal.value = meal
  formData.name = meal.name
  formData.day = meal.day
  formData.category = meal.category
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
  currentMeal.value = null
}

const submitEdit = () => {
  if (currentMeal.value && formData.name && formData.day && formData.category) {
    mealStore.editMeal(
      currentMeal.value.id,
      formData.name,
      formData.day,
      formData.category
    )
    closeModal()
  }
}

defineExpose({
  openModal,
})
</script>

<style scoped>
:root {
  --color-primary: #10b981;
}

.bg-primary {
  background-color: var(--color-primary);
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--color-primary);
}
</style>
