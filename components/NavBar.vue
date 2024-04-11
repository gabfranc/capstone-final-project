<template>
  <nav class="flex justify-between p-2 bg-maroon">
    <NuxtLink to="/" id="quick-logo" class="relative m-auto p-auto">
      <img src="../Images/Dark.png" class="h-14 relative m-auto p-auto" alt="Logo Image">
    </NuxtLink>

    <ul class="relative font-sans flex gap-14 text-12 mt-4 p-4">
      <!-- <li><NuxtLink to="/about">ABOUT</NuxtLink></li> -->
      <li>
        <NuxtLink to="/articles" class="relative m-auto p-auto">RECIPES</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="relative m-auto p-auto">CONTACT</NuxtLink>
      </li>
      <button type="button">
          <NuxtLink to="/login">LOG IN</NuxtLink>
          </button>
          <button type="button">
            <NuxtLink to="/sign-up">SIGN UP</NuxtLink>
          </button>
    </ul>
  </nav>

</template>
<style>
#quick-logo{
  margin-left: -2px;
}
</style>