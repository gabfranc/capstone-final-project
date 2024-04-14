<script setup>
import { ref } from 'vue';

const likeButtonImg = '../Images/heart.png';
const dislikeButtonImg = '../Images/unheart.png';

// Define reactive variables
const isLiked = ref(false);

// Define methods
const toggleLike = () => {
  isLiked.value = !isLiked.value;
};
</script>

<template>
  <div>
    <button @click="toggleLike"
      :class="['sm:ml-48','md:ml-80', 'absolute','bg-yellow', 'hover:bg-orange', 'focus:bg-maroon', 'hover:opacity-80','focus:text-yellow', isLiked ? 'bg-maroon' : 'focus:bg-yellow', 'text-maroon', 'font-bold', 'py-2', 'px-4', 'justify-right', 'rounded']">
      {{ isLiked ? 'UnLike' : 'Like' }}
    </button>
  </div>
</template>

<!-- absolute top-0 left-0 m-4 text-yellow font-bold hover:italic -->