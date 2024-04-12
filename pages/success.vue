<script>
export default {
  props: {
    success: Object
  }
}
</script>

<template>
  <div class="success-page">
    <h1> HURRAY!!! YOU ARE NOW LOGGED IN!!😍😍😍</h1>
    <p class="flex">{{ success.message }}</p>
    <NuxtLink to="/" class="return-home">
      CONTINUE
    </NuxtLink>
  </div>
</template>