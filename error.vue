<script>
export default {
  props: {
    error: Object
  }
}
</script>

<template>
  <div class="error-page">
    <h1> HEY YOU! WHY ARE YOU HERE?! 😠</h1>
    <p class="flex">{{ error.message }}</p>
    <NuxtLink to="/" class="return-home">
      Go BACK!
    </NuxtLink>
  </div>
</template>