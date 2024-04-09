<script setup>
const { data: posts, error, pending } = await useFetch("/api/recipe", {
  headers: useRequestHeaders(["cookies"]),
});
</script>
<template>
  <main>
    <div v-if="pending">
      Loading recipes...⌛
    </div>
    <div v-else-if="error">
      Error fetching recipes. Please try again.
    </div>
    <div v-else>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <NuxtLink :to="`/recipes/${post.slug}`">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>