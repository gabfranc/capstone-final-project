<script>
export default {
  props: {
    error: Object
  }
}
</script>

<template class="bg-yellow">
  <div class="error-page m-auto pt-40 bg-yellow h-96 relative text-center">
    <h1 class="text-4xl text-maroon font-black"> HEY YOU! WHY ARE YOU HERE?! <span class="cursor-pointer hover:shadow-md hover:shadow-black">😠</span></h1>
    <p class="flex">{{ error.message }}</p>
    <NuxtLink to="/" class="return-home bg-maroon text-white h-8 w-12 rounded-sm text-md">
      Go BACK!
    </NuxtLink>
  </div>
</template>