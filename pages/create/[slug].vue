<script setup>
const route = useRoute();
const { data: post, error, pending } = await useFetch(`/api/recipe/${route.params.slug}`);
</script>
<template>
  <main>
    <div v-if="pending">
      Loading recipe...
    </div>
    <div v-else-if="error">
      Error fetching recipe. Please try again.
    </div>
    <div v-else>
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
  </main>
</template>