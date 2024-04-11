<script setup>
import { toRaw } from "vue";


definePageMeta({
  layout: 'meals'
})
//TODO: fetch the products
const { data, error } = await useFetch(
  `https://www.themealdb.com/api/json/v1/1/search.php?s=A`
);
let results = [];
// const meals = await response.json()
console.log(data.value.meals)


</script>
<template>
  <header class="bg-yellow p-12">
    <h1 class="m-auto p-auto font-bold text-2xl">RECIPES</h1>
  </header>
  <main class="bg-yellow">
    <section class="grid grid-cols-4 gap-5">
      <div v-for="meal in meals" :key="meal.id">
        <h2>{{ meal.name }}</h2>
      </div>
    </section>
  </main>
</template>