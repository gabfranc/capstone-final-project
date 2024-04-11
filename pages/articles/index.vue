<script setup>
import { ref } from 'vue';
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();
const { data: recipes } = await useAsyncData("recipes", async () => {
  const { data } = await supabase.from("recipes").select("*");
  return data;

})

const showBlog = ref(false);

const openBlog = () => {
  showBlog.value = true;
};


const closeBlog = () => {
  showBlog.value = false;
};
</script>
<template>

  <section>
    <ul>
      <li v-for="(recipe, index) in recipes" :key="index">
        <NuxtLink :to="recipe" @click="openBlog">{{ blog.title }}</NuxtLink>
        <div v-if="showBlog" class="popup">
          <div class="blog-content">
            <h2>{{ recipe.title }}</h2>
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