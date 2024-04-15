<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

definePageMeta({
  layout: 'meals'
});

// Define a reactive variable to store the fetched data
const meals = ref([]);
// Define a reactive variable to store the search query
const searchQuery = ref('');
// Define a reactive variable to store the currently selected meal
const selectedMeal = ref(null);

// Fetch data when the component is mounted
onMounted(async () => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=A`);
    meals.value = response.data.meals;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

// Implement a computed property for a search filter
const filteredMeals = computed(() => {
  return meals.value.filter(meal => {
    const searchText = searchQuery.value.toLowerCase();
    // Check if the meal name or any ingredient contains the search query
    return (
      meal.strMeal.toLowerCase().includes(searchText) ||
      Object.values(meal)
        .filter(value => typeof value === 'string' && value !== '')
        .some(value => value.toLowerCase().includes(searchText))
    );
  });
});

// Make function for recipes to pop up and hide other meals
const showRecipe = (meal) => {
  selectedMeal.value = meal;
  // Hide other meals
  meals.value.forEach(item => {
    if (item !== meal) {
      item.hidden = true;
    }
  });
}

// Make function to close recipe pop up and show all meals again
const hideRecipe = () => {
  selectedMeal.value = null;
  // Show all meals
  meals.value.forEach(item => {
    item.hidden = false;
  });
};
</script>

<template>
  <div class="ease-in-out text-center h-auto bg-yellow m-auto p-auto relative overflow-y-visible">
    <div class="headimage">
      <div class="header sm:mr-96 sm:pr-64 md:mr-0 md:pr-2 pt-0">
        <h1 class="text-4xl pt-12 text-white opacity-90 font-bold">Meals</h1>
        <!-- Search Bar -->
        <input type="text" v-model="searchQuery" placeholder="Search..."
          class="opacity-77 mt-8 p-2 border border-yellow h-12 w-96 rounded-md active:italic">
      </div>
    </div>

    <ul class="grid grid-cols-3 gap-16 pt-24">
      <li v-for="meal in filteredMeals" :key="meal.idMeal" class="h-24 mt-12 hover:animate-pulse active:animate-ping cursor-pointer"
        v-show="!meal.hidden">
        <NuxtLink :to="meal" @click="showRecipe(meal)">
          <img :src="meal.strMealThumb" class="m-auto p-auto justify-center h-36 rounded-lg" />
          <h1 class="text-maroon text-lg font-bold hover:italic">{{ meal.strMeal }}</h1>
          <p class="text-xs font-bold font-orange">{{ meal.strArea }}</p>
        </NuxtLink>
      </li>
    </ul>
    <!-- Popup for Selected Recipe -->
    <div v-if="selectedMeal" class="popup w-fit h-fit shadow-orange-12 shadow-md m-auto p-auto">
      <!-- Recipe Details -->
      <div class="flex justify-center items-center">
        <LikeButton />
        <ShareButton />
      </div>
      <h1 class="font-bold text-maroon italic text-3xl mt-12 pb-12">{{ selectedMeal.strMeal }}</h1>
      <div class=" justify-center gap-16 m-auto p-auto flex text-center">
        <h2 class="text-md font-bold italic">{{ selectedMeal.strTags }}</h2>
        <h2 class="text-md font-bold italic">{{ selectedMeal.strCategory }}</h2>
        <h2 class="text-md font-bold italic">{{ selectedMeal.strArea }}</h2>
      </div>
      <div class="mt-12">
        <img :src="selectedMeal.strMealThumb" class=" h-96 justify-center gap-16 m-auto p-auto flex text-center" />
      </div>
      <div id="ingred">
        <h3 class="mt-14 text-maroon font-bold italic text-lg">Ingredients</h3>
        <ul class="grid grid-cols-3 gap-4 mt-12">
          <li>{{ selectedMeal.strIngredient1 }}</li>
          <li>{{ selectedMeal.strIngredient2 }}</li>
          <li>{{ selectedMeal.strIngredient3 }}</li>
          <li>{{ selectedMeal.strIngredient4 }}</li>
          <li>{{ selectedMeal.strIngredient5 }}</li>
          <li>{{ selectedMeal.strIngredient6 }}</li>
          <li>{{ selectedMeal.strIngredient7 }}</li>
          <li>{{ selectedMeal.strIngredient8 }}</li>
          <li>{{ selectedMeal.strIngredient9 }}</li>
          <li>{{ selectedMeal.strIngredient10 }}</li>
          <li>{{ selectedMeal.strIngredient11 }}</li>
          <li>{{ selectedMeal.strIngredient12 }}</li>
          <li>{{ selectedMeal.strIngredient13 }}</li>
          <li>{{ selectedMeal.strIngredient14 }}</li>
          <li>{{ selectedMeal.strIngredient15 }}</li>
          <li>{{ selectedMeal.strIngredient16 }}</li>
          <li>{{ selectedMeal.strIngredient17 }}</li>
          <li>{{ selectedMeal.strIngredient18 }}</li>
          <li>{{ selectedMeal.strIngredient19 }}</li>
          <li>{{ selectedMeal.strIngredient20}}</li>

        </ul>
      </div>
      <div id="par" class=" justify-center gap-16 m-auto pb-20 pl-12 pr-12 text-center">
        <h3 class="mt-14 text-maroon font-bold italic text-lg">Instructions</h3>
        <p class="ml-10 mt-12 mr-10 pl-12 text-left ">{{ selectedMeal.strInstructions }}</p>
      </div>
      <button @click="hideRecipe" class="absolute top-0 left-0 m-4 text-yellow font-bold hover:italic">GO BACK</button>
    </div>
    <div class="review-box mt-24 pt-2">
      <ReviewBox />
    </div>
  </div>
</template>

<style>
.headimage {
  background-image: url('https://images.pexels.com/photos/159987/pexels-photo-159987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  margin-top:12px;
  width: 1257px;
  height: 130px;
}

.headimage h1 {
  margin-top: -15px;
  padding-top: -15px;
}
.headimage input {
  margin-top:72px;
}
</style>