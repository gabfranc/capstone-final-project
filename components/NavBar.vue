<template>
  <nav class="flex justify-between p-6 bg-maroon">
    <NuxtLink to="/">
      <img src="../Images/Dark.png" alt="Logo Image">
    </NuxtLink>

    <ul class="font-sans">
      <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
      <li><NuxtLink to="/create">CREATE</NuxtLink></li>
      <li><NuxtLink to="/blog">WHAT'S NEW</NuxtLink></li>
      <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
      <button type="button"><NuxtLink to="/login">LOG IN</NuxtLink></button>
      <button type="button"><NuxtLink to="/signup">SIGN UP</NuxtLink></button>
    </ul>
  </nav>
</template>