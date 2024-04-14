<template>
  <div id="carousel" class="relative">
    <Slider />
    <div class="absolute sm:mt-24 sm:pt-72 md:mt-96 md:pt-40 inset-0 flex items-left justify-left">
      <div class="text-center">
        <img src="/Images/Light.png" class="sm:h-16 md:h-20 mx-auto mb-4" alt="logo">
        <p class="font-bold italic text-yellow mr-14 mb-4">RECIPES THAT ARE QUICK AND SIMPLE</p>
        <button class="bg-maroon text-yellow font-bold mr-64 py-2 px-4 rounded-lg shadow-lg hover:animate-pulse hover:shadow-black hover:shadow-md">
          <NuxtLink to="/articles">RECIPES</NuxtLink>
        </button>
      </div>
    </div>
  </div>



</template>
<style scoped>
  #carousel {
    margin-top: -60px;
  }
  img {
    margin-top: -30vh;
    margin-left: 50px;
  }
  p {
    margin-left:8vh;
  }
  button{
    margin-left:8vh;
  }

</style>