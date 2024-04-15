<script setup>
import { ref } from 'vue';

const sideNavOpen = ref(false);

const openNav = () => {
  sideNavOpen.value = true;
};

const exitNav = () => {
  sideNavOpen.value = false;
};
</script>
<template>
  <nav class="flex justify-between items-center p-4 bg-maroon">
    <NuxtLink to="/">
      <img src="/Images/Dark.png" class="h-14">
    </NuxtLink>

    <div @click="openNav" class="hover:scale-125 transition duration-150 ease-in cursor-pointer">
      <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="18.853" height="14" viewBox="0 0 18.853 12">
        <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-4.5 -8)">
          <path id="Path_3" data-name="Path 3" d="M4.5,18H23.353" transform="translate(0 -4)" fill="none" stroke="#fff"
            stroke-linejoin="round" stroke-width="2" />
          <path id="Path_4" data-name="Path 4" d="M4.5,9H23.353" transform="translate(0)" fill="none" stroke="#fff"
            stroke-linejoin="round" stroke-width="2" />
          <path id="Path_5" data-name="Path 5" d="M4.5,27H23.353" transform="translate(0 -8)" fill="none" stroke="#fff"
            stroke-linejoin="round" stroke-width="2" />
        </g>
      </svg>
    </div>

    <div v-show="sideNavOpen" class=" fixed inset-0 bg-transparent z-10 transition-opacity duration-500 "
      :class="{ 'opacity-0 pointer-events-none': !sideNavOpen }">
      <div
        class="fixed top-0 right-0 bg-maroon text-yellow h-full flex flex-col justify-center items-center overflow-hidden duration-500 font-bold z-20"
        :class="{ 'translate-x-0': sideNavOpen, 'translate-x-full': !sideNavOpen, 'w-full md:w-56': true }">
        <a href="javascript:void(0)" @click="exitNav"
          class="text-3xl absolute top-0 right-0 mr-3 mt-3 hover:scale-125 transition duration-150 ease-in">&times;</a>

        <ul class="text-lg mt-2">
          <li class="p-2 hover:scale-110 transition duration-150 ease-in hover:text-orange">
            <NuxtLink to="/about">ABOUT</NuxtLink>
          </li>
          <li class="p-2 hover:scale-110 transition duration-150 ease-in hover:text-orange active:animate-ping">
            <NuxtLink to="/articles">Recipes</NuxtLink>
          </li>
          <li class="p-2 hover:scale-110 transition duration-150 ease-in hover:text-orange active:animate-ping">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
          <li class="p-2 hover:scale-110 transition duration-150 ease-in hover:text-orange active:animate-ping">
            <NuxtLink to="/login">Log In</NuxtLink>
          </li>
          <li class="p-2 hover:scale-110 transition duration-150 ease-in hover:text-orange active:animate-ping">
            <NuxtLink to="/sign-up">Sign Up</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>