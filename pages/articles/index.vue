<script setup>
import { ref } from 'vue';
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();
const { data: recipes } = await useAsyncData("recipes", async () => {
  const { data } = await supabase.from("recipes").select("*");
  return data;

})

//DONE: Make blog post appear when the nuxtlink is clicked
const showRecipe = ref(false);

//DONE: Create Function to make the blog popup
const openRecipe = () => {
  showRecipe.value = true;
};

//DONE: Create function to close the blog pop up

const closeRecipe = () => {
  showBlog.value = false;
};
</script>
<template>
  
  <section>
    <ul>
      <li v-for="(recipe, index) in recipes" :key="index">
        <NuxtLink :to="blog" @click="openRecipe">{{ recipe.title }}</NuxtLink>
       <div v-if="showRecipe" class="popup">
        <div class="blog-content">
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.description }}</p>

          <button @click="closeRecipe">Close Recipe</button>
        </div>
       </div>
    </li>
    </ul>
  </section>
</template>
<style scoped>
  button {
    cursor: pointer;
  }
</style>