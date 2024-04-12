<script setup>
const img = [
    'https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ]
</script>
<template>
  <section class="overflow-hidden">
    <h2 class="text-center mb-12 font-bold text-maroon text-2xl italic">Reviewed Recipes</h2>
    <div class="flex">
      <div class="flex pt-14 pl-24 ml-64 mb-24 bg-white opacity-70 rounded-lg h-80 w-2/3 relative">
        <div>
          <h2 class="text-left text-lg font-bold">Tiana Babe</h2>
          <p class="mt-12 w-64 text-left">I LOVE LOVE LOVE!!!!! the Ma Po Tofu. I had my daughter to help me <br>
            out a little bit and she had fun cooking with me. I am always craving it afterwards.</p>
        </div>
        <img :src="img" class="ml-24 h-56">
      </div>
    </div>
  </section>
  <section>
    <div class="flex pt-14 pl-24 ml-64 mb-24 bg-white opacity-70 rounded-lg h-80 w-2/3 relative">
      <div>
        <h2 class="text-left text-lg font-bold">Lewis McCartney</h2>
        <p class="mt-12 w-64 text-left">I'm always skeptical of trying new recipes, but this one exceeded all my
          expectations. The combination of ingredients was unique, and the end result was absolutely delicious. I'll
          definitely be making this again!</p>
      </div>
      <img :src="img" class="ml-24 h-56">
    </div>
  </section>
  <section class="pb-12">
    <div class="flex pt-14 pl-24 ml-64 mb-24 bg-white opacity-70 rounded-lg h-80 w-2/3 relative">
      <div>
        <h2 class="text-left text-lg font-bold">Tiana Babe</h2>
        <p class="mt-12 w-64 text-left">I LOVE LOVE LOVE!!!!! the Ma Po Tofu. I had my daughter to help me <br>
          out a little bit and she had fun cooking with me. I am always craving it afterwards.</p>
      </div>
      <img :src="img" class="ml-24 h-56">
    </div>
  </section>
</template>

