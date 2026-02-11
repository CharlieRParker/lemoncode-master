<template>
  <div class="bg-white rounded-lg shadow-md p-6 mb-8">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">
      ➕ Agregar Nuevo Plato
    </h2>

    <form @submit.prevent="submitForm" class="space-y-4">
      <!-- Meal Name -->
      <div>
        <label
          for="mealName"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Nombre del plato
        </label>
        <input
          id="mealName"
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
          for="mealDay"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Día de la semana
        </label>
        <select
          id="mealDay"
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
          for="mealCategory"
          class="block text-sm font-medium text-gray-700 mb-2"
        >
          Categoría
        </label>
        <select
          id="mealCategory"
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

      <button
        type="submit"
        class="w-full bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
      >
        Agregar Plato
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useMealStore } from '../stores/mealStore'

const mealStore = useMealStore()
const { dayOrder, categories } = mealStore

const formData = reactive({
  name: '',
  day: '',
  category: 'Comida',
})

const submitForm = () => {
  if (formData.name && formData.day && formData.category) {
    mealStore.addMeal(formData.name, formData.day, formData.category)

    // Reset form
    formData.name = ''
    formData.day = ''
    formData.category = 'Comida'
  }
}
</script>

<style scoped>
:root {
  --color-primary: #10b981;
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--color-primary);
}

.bg-primary {
  background-color: var(--color-primary);
}

.hover\:bg-green-700:hover {
  background-color: #047857;
}
</style>
