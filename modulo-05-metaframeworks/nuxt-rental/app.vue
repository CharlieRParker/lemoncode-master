<template>
  <div>
    <Header />
    <NuxtRouterEvents @navigate="isLoading = false" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(false);
</script>
