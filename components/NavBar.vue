<template>
  <nav class="flex justify-between p-2 bg-maroon hover:bg-yellow">
    <NuxtLink to="/">
      <img src="../Images/Dark.png" class="h-14" alt="Logo Image">
    </NuxtLink>

    <ul class="font-sans flex gap-14 text-12 mt-4 p-4">
      <!-- <li><NuxtLink to="/about">ABOUT</NuxtLink></li> -->
      <li><NuxtLink to="/articles">RECIPES</NuxtLink></li>
      <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
      <button type="button"><NuxtLink to="/login">LOG IN</NuxtLink></button>
      <button type="button"><NuxtLink to="/sign-up">SIGN UP</NuxtLink></button>
    </ul>
  </nav>
</template>