<script setup lang="ts">
import { ref } from 'vue';

const isClicked = ref(false);

const toggleClicked = () => {
  isClicked.value = !isClicked.value;
};
</script>
<template>
  <div class="ml-8 justify-center cursor-pointer hover:text-orange">
    <svg :class="{ 'text-maroon': isClicked }" @click="toggleClicked" xmlns="http://www.w3.org/2000/svg" width="4vh"
      height="4vh" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="m21.707 11.293l-8-8A1 1 0 0 0 12 4v3.545A11.015 11.015 0 0 0 2 18.5V20a1 1 0 0 0 1.784.62a11.456 11.456 0 0 1 7.887-4.049c.05-.006.175-.016.329-.026V20a1 1 0 0 0 1.707.707l8-8a1 1 0 0 0 0-1.414M14 17.586V15.5a1 1 0 0 0-1-1c-.255 0-1.296.05-1.562.085a14.005 14.005 0 0 0-7.386 2.948A9.013 9.013 0 0 1 13 9.5a1 1 0 0 0 1-1V6.414L19.586 12Z" />
    </svg>
  </div>
</template>

