<script setup>
const img = [
    'https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ]
</script>
<template>
  <section class="overflow-hidden">
    <h2 class="text-center mb-12 font-bold text-maroon text-2xl italic">Reviewed Recipes</h2>
   <div class="flex">
    <div>
        <h2>Tiana Babe</h2>
        <p class="mt-12">I LOVE LOVE LOVE!!!!! the Ma Po Tofu. I had my daughter to help me <br>
          out a little bit and she had fun cooking with me. I am always craving it afterwards.</p>
      </div> 
      <img :src="img" class="h-56">
    </div>
  </section>
</template>

