<script setup>
const image1 = [
'https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]
const image2 = [
  'https://images.pexels.com/photos/4099127/pexels-photo-4099127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]
const image3 = [
  'https://images.pexels.com/photos/6646369/pexels-photo-6646369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]
</script>
<template>
  <main
    class="ml-56 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen items-center justify-center">
    <div class="recipes m-auto p-auto">
      <img :src="image1" class="sm:h-48 s:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-cover m-auto p-auto">
      <h2 class="text-center">Create Recipes</h2>
    </div>
    <div class="sweet m-auto p-auto">
      <img :src="image2" class="sm:h-48 s:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 h-64 w-64 object-cover m-auto p-auto">
      <h2 class="text-center">Fullfill Your SweetTooth</h2>
    </div>
    <div class="tradition m-auto p-auto text-center">
      <img :src="image3" class="sm:h-48 s:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-cover m-auto p-auto">
      <h2>Live By Traditions</h2>
    </div>
  </main>
</template>