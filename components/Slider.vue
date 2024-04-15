<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

//DONE: import my images
const images = [
  'https://images.pexels.com/photos/407041/pancakes-maple-syrup-sweet-407041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/9095/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3569706/pexels-photo-3569706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3569706/pexels-photo-3569706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2015097/pexels-photo-2015097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

//DONE: create currentIndex for carousel
const currentIndex = ref(0);
const currentImage = ref(images[currentIndex.value]);

//DONE: creating value for the currentIndex and currentImage
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
  currentImage.value = images[currentIndex.value];
};

let interValid;

//DONE: setting start and stop intervals for the carousel

const startInterval = () => {
  interValid = setInterval(nextImage, 6000);//For every 6 secounds, the images will change continuously on the carousel
};

const stopInterval = () => {
  clearInterval(interValid);
};

//DONE: adding the onMounted and onUnmounted

onMounted(() => {
  startInterval();
});

onUnmounted(() => {
  stopInterval();
});

</script>
<template>
  <div class="relative">
    <img :src="currentImage" alt="Hero Image" class="relative w-full h-full max-h-[600px] object-cover object-top mt-12" />
  </div>
  
</template>