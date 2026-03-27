// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'  // El módulo ya está aquí
  ],
  css: ['~/assets/styles/main.css'],
  runtimeConfig: {
    public: {
      // Configuración para el módulo de imagen
    }
  },

  compatibilityDate: '2024-04-03',
});