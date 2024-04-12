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
    class="md:ml-56 sm:ml-8 sm:mt-12 sm:gap-12 grid grid-cols-1 sm:grid md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen items-center justify-center">
    <NuxtLink to="/articles">
      <div
        class="hover:bg-orange hover:opacity-70 recipes m-auto p-auto text-maroon text-lg font-bold hover:italic cursor-pointer">
        <img :src="image1" class="sm:h-48 s:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-cover m-auto p-auto">
        <h2 class="text-center">Create Recipes</h2>
      </div>
    </NuxtLink>
    <NuxtLink to="/articles">
      <div
        class="hover:bg-orange hover:opacity-70 recipes m-auto p-auto text-maroon text-lg font-bold hover:italic cursor-pointer">
        <img :src="image2" class="sm:h-48 s:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 h-64 w-64 object-cover m-auto p-auto">
        <h2 class="text-center">Fullfill Your SweetTooth</h2>
      </div>
    </NuxtLink>
    <NuxtLink to="/articles">
    <div
      class="hover:bg-orange hover:opacity-70 recipes m-auto p-auto text-maroon text-center text-lg font-bold hover:italic cursor-pointer">
      <img :src="image3" class="sm:h-48 s:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-cover m-auto p-auto">
      <h2>Live By Traditions</h2>
    </div>
    </NuxtLink>
  </main>
</template>