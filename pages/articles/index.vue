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
const showBlog = ref(false);

//DONE: Create Function to make the blog popup
const openBlog = () => {
  showBlog.value = true;
};

//DONE: Create function to close the blog pop up

const closeBlog = () => {
  showBlog.value = false;
};
</script>
<template>

  <section class="flex-col">
    <ul>
      <li v-for="(recipe, index) in recipes" :key="index">
        <NuxtLink :to="recipe" @click="openBlog">{{ recipe.title }}</NuxtLink>
        <div v-if="showBlog" class="popup">
          <div class="blog-content">
            <h2>{{ recipe.title }}</h2>
            <p>{{ recipe.image }}</p>
            <p>{{ recipe.description }}</p>

            <button @click="closeBlog">Close Recipe</button>
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