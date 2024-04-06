<script setup>
import Footer from '~/components/Footer.vue'
import NavBar from '~/components/NavBar.vue'
import Hero from '~/components/Hero.vue'

defineExpose({ Footer, NavBar, Hero})
</script>
<template>
  <div class="flex flex-col min-h-screen bg-yellow">
    <NavBar />

    <main>
      <NuxtPage />
    </main>

    <LazyFooter />
  </div>
</template>