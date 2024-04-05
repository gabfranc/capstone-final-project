<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
//DONE: importing images to the hero image slider
  const images = [
    'https://www.pexels.com/photo/happy-woman-with-rolling-pin-cooking-at-home-3769999/',
    'https://www.pexels.com/photo/woman-in-the-kitchen-cooking-2890387/',
    'https://www.pexels.com/photo/pancake-on-plate-2113556/',
    'https://www.pexels.com/photo/burning-stove-266896/',
    'https://www.pexels.com/photo/sushi-on-brown-wooden-board-2098085/',
    'https://www.pexels.com/photo/woman-in-white-sweater-baking-cake-3992206/',
    'https://www.pexels.com/photo/woman-in-blue-crew-neck-t-shirt-holding-stainless-steel-bowl-4686816/',
    'https://www.pexels.com/photo/photo-of-chocolate-cake-2144200/',
    'https://www.pexels.com/photo/family-preparing-food-in-the-kitchen-4262010/',
    'https://www.pexels.com/photo/girl-in-yellow-shirt-holding-brown-cake-3992372/'
  ];
//DONE: Creating indexes
  const currentIndex = ref(0);

  const currentImage = ref(images[currentIndex.value]);

  const nextImage = () => {
    currentIndex.value = (currentImage.value + 1) % images.length;
    currentImage.value = images[currentIndex.value];
  };

  let interValid;

  //DONE: setting setIntervals for the images to change frequently

  const startInterval = () => {
    clearInterval(interValid);
  };

  const stopInterval = () => {
    clearInterval(interValid);
  };

  onMounted(() => {
    startInterval();
  });

  onUnmounted(() => {
    stopInterval();
  });
</script>
<template>
  <NuxtLayout>
    <div id="hero-image">
      <img :src="currentImage" alt="Hero Images" class="w-full h-full max-h-[600px] object-cover object-top">
    </div>
    <div class="block flex-start absolute">
      <img src="../Images//Dark.png" id="logo" class="h-4" alt="Logo">
      <h3 class="italic font-serif">Recipes that are quick and easy</h3>
      <button type="button" class="mt-12 font-sans"><NuxtLink to="/create">RECIPES</NuxtLink></button>
    </div>
  </NuxtLayout>
</template>
