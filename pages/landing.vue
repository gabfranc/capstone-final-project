<script setup>
  const { data: posts } = await useFetch("/pages/blog", {
    headers: useRequestHeaders(["cookie"]),  
  })
</script>
<template>
  <main>

    
  </main>
</template>