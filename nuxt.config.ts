// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
  supabase: { redirect: false },
});