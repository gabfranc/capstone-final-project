<script setup>
const route = useRoute();
const supabase = useSupabaseClient();
console.log(route.params.recipe);
const { data: recipe } = await useAsyncData("recipe", async () => {
  const { data } = await supabase
    .from("recipes")
    .select("*")
    .eq("slug", route.params.recipe)
    .single();
  return data;
})
</script>
<template>
  <div v-if="recipe.value">
    <h2> {{ recipe.value.title }}</h2>
    <p> {{ recipe.value.description }}</p>
    <p>Blog Last Update: {{ recipe.date_updated }}</p>
  </div>
  <!-- <main>
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.content }}</p>
    <p>Blog Last Update: {{ blog.date_updated }}</p>
  </main> -->
</template>
<style>
main {
  max-width: 800px;
  margin: 0 auto;
}
</style>