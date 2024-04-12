<script setup>
import { ref } from 'vue';

const header = ref('GOT A QUESTION?');
const parEl = ref('please contact us!');
</script>
<template>
  <header class="text-center p-40">
  <h1>{{ header }}</h1>
  <p>{{ parEl }}</p>
  </header>
  <main class="relative justify-center align-middle text-center m-auto p-auto">
    <form class="block m-auto p-auto">
      <div class="block gap-8 p-8">
      <input type="text" name="name" placeholder="name" v-model="name"/>
      <br>
      <input type="email" name="email" placeholder="email" v-model="email" class="mt-2"/>
      <br>
      <div>
        <textarea type="message" name="message" placeholder="message" v-model="message" class="mt-2 w-48"></textarea>
      </div>
    </div>
      <button type="submit">SUBMIT</button>
    </form>
  </main>
</template>