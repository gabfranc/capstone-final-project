<script setup>
import { ref } from 'vue';
const supabase = useSupabaseClient();
const router = useRouter();

const { data: recipes } = await useAsyncData("recipes", async () =>{
  const { data } = await supabase.from("recipes").select("*");
});

const selectRecipe = ref(null);

const openRecipe = (recipe) => {
  selectRecipe.value = recipe;
};

const hideRecipe = () => {
  selectRecipe.value = null;
};

</script>
<template>
  <section>
    <ul>
      <li v-for="(recipe, index) in recipes" :key="index">
        <NuxtLink :to="`/recipes/${recipe.slug}`">{{ recipe.title }}</NuxtLink>
      
        <div v-if="selectRecipe && selectRecipe.id === recipe.id" class="popup">
          <div class="recipe-content">
            <h2>{{ selectRecipe.title }}</h2>
            <p>{{  selectRecipe.description }}</p>

            <button @click="hideRecipe">Hide Recipe</button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>