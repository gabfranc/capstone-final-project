<template>
  <div id="carousel" class="relative">
    <Slider id="slider" class="relative" />
    <div class="justify-center shadow-md shadow-yellow">
      <img src="/Images/Light.png" class="h-20 relative ml-24" alt="logo">
      <p class="font-bold italic relative text-yellow mr-96 font-sans shadow-black">RECIPES THAT ARE QUICK AND SIMPLE
      </p>
      <button class="relative bg-maroon mt-2 mr-96 h-8 w-24 text-yellow font-bold rounded-lg shadow-lg">
        <NuxtLink to="/articles">RECIPES</NuxtLink>
      </button>
    </div>
  </div>


</template>
<style scoped>
  #slider {
    margin-top:-48px;
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