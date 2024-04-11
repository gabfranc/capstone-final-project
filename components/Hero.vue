<template>
    <div id="carousel" class="relative">
      <Slider id="slider" class="relative"/>
        <img src="/Images/Light.png" class="h-16 relative mr-64 ml-64" alt="logo">
        <p class="relative text-yellow mr-64 font-sans shadow-black">RECIPES THAT ARE QUICK AND SIMPLE</p>
      <button class="relative bg-maroon mt-2 mr-96 h-8 w-24 text-yellow font-bold rounded-lg shadow-lg"><NuxtLink to="/recipe">RECIPES</NuxtLink></button>
    </div>
 
</template>
<style scoped>
  #slider {
    margin-top:-48px;
  }

  img {
    margin-top: -30vh;
    margin-left: 20px;
  }
  button {
    margin-right: 70vh;
  }

</style>