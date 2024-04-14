<script setup>
import { ref } from 'vue';

const isLiked = ref(false);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};
</script>
<template>
  <button class="like-button hover:text-orange" :class="{ 'text-maroon': isLiked }" @click="toggleLike">
    <svg class="heart-icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path :class="{ 'text-maroon': isLiked }" fill="currentColor"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </button>
</template>


