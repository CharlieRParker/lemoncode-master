<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
    <!-- Header -->
    <header class="bg-gradient-to-r from-primary to-secondary shadow-lg">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-white mb-2">🍽️ Meal Planner</h1>
        <p class="text-green-100">Planifica tus comidas de la semana</p>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="bg-white shadow-md sticky top-0 z-10">
      <div class="container mx-auto px-4">
        <div class="flex space-x-8">
          <router-link
            to="/"
            class="block px-4 py-3 text-center font-medium transition-colors"
            :class="
              $route.name === 'WeeklyPlan'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            "
          >
            <span class="inline-block mr-2">📅</span>Plan Semanal
          </router-link>
          <router-link
            to="/favorites"
            class="block px-4 py-3 text-center font-medium transition-colors"
            :class="
              $route.name === 'FavoriteMeals'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            "
          >
            <span class="inline-block mr-2">⭐</span>Favoritos
          </router-link>
          <router-link
            to="/settings"
            class="block px-4 py-3 text-center font-medium transition-colors"
            :class="
              $route.name === 'Settings'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            "
          >
            <span class="inline-block mr-2">⚙️</span>Configuración
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 mt-16 py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 Meal Planner App. Hecho con ❤️ en Vue 3</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
:root {
  --color-primary: #10b981;
  --color-secondary: #8b5cf6;
}

.from-primary {
  --tw-gradient-from: var(--color-primary);
}

.to-secondary {
  --tw-gradient-to: var(--color-secondary);
}

.text-primary {
  color: var(--color-primary);
}

.border-primary {
  border-color: var(--color-primary);
}
</style>
