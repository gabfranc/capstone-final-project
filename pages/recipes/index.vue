<script setup>
const { data: post } = await useFetch("/api/blog", {
  headers: useRequestHeaders(["cookie"]),
});
</script>
<template>
  <main></main>
  <div>
    <ul>
      <li v-for="(recipes, index) in posts" :key="index">
        <NuxtLink :to="`/recipes/${recipes.slug}`">{{ recipes.title }}</NuxtLink>
      </li>
    </ul>
  </div>
  <button type="button"><NuxtLink to="/">HOME</NuxtLink></button>
</template>
