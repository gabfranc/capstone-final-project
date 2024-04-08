// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    
  },
  supabase: {
    redirect: false
  }
})
