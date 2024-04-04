<script setup>
  import Hero from "~components/Hero.vue";
  const { data: posts } = await useFetch("/pages/blog", {
    headers: useRequestHeaders(["cookie"]),  
  })
</script>
<template>
  <main>
    <Hero />

    
  </main>
</template>