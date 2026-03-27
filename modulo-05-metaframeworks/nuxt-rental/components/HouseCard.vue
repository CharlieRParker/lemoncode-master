<template>
  <NuxtLink :to="`/houses/${house.id}`" class="block">
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <div class="relative w-full h-48 bg-gray-200">
        <NuxtImg
          :src="house.image"
          :alt="house.name"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="p-6">
        <h2 class="text-xl font-bold text-gray-800 mb-2">{{ house.name }}</h2>
        <p class="text-gray-600 text-sm mb-3 line-clamp-2">
          {{ house.description }}
        </p>
        <div class="flex gap-2 text-sm text-gray-500 mb-4">
          <span>📍 {{ house.location }}</span>
        </div>
        <div class="flex justify-between items-center mb-4">
          <div class="flex gap-4 text-sm">
            <span>🛏️ {{ house.bedrooms }} hab.</span>
            <span>🚿 {{ house.bathrooms }} baños</span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-2xl font-bold text-blue-600">${{ house.pricePerNight }}</span>
          <span class="text-xs text-gray-500">/noche</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { House } from '~/types/house';

defineProps<{
  house: House;
}>();
</script>
