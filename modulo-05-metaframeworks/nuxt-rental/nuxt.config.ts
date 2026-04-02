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
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3001'
    }
  },
  imports: {
    autoImport: true
  },
  devServer: {
    port: 3000,
    host: 'localhost'
  },

  compatibilityDate: '2024-04-03',
});