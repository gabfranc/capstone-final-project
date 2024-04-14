<script setup>
import { ref } from 'vue';

// const likeButtonImg = '../Images/heart.png';
// const dislikeButtonImg = '../Images/unheart.png';

const isLiked = ref(false);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};
</script>

<template>
  <div>
    <button @click="toggleLike"
      :class="['sm:ml-48', 'md:ml-80', 'absolute', isLiked ? 'text-yellow' : 'text-maroon', 'bg-yellow', 'hover:bg-orange', 'focus:bg-maroon', 'hover:opacity-80', isLiked ? 'bg-maroon' : 'focus:bg-yellow', 'font-bold', 'py-2', 'px-4', 'justify-right', 'rounded']">
      {{ isLiked ? 'UnLike' : 'Like' }}
    </button>
  </div>
</template>


<!-- absolute top-0 left-0 m-4 text-yellow font-bold hover:italic -->