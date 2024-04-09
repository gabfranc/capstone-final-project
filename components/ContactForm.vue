<script setup>
import { ref } from 'vue';

const header = ref('GOT A QUESTION?');
const parEl = ref('please contact us!');
</script>
<template>
  <header>
  <h1>{{ header }}</h1>
  <p>{{ parEl }}</p>
  </header>
  <main class="relative m-auto p-auto">
    <form class="block m-auto p-auto">
      <div class="block">
      <input type="text" name="name" placeholder="name" v-model="name"/>
      <input type="email" name="email" placeholder="email" v-model="email"/>
      <div>
        <textarea type="message" name="message" placeholder="message" v-model="message"></textarea>
      </div>
    </div>
      <button type="submit">SUBMIT</button>
    </form>
  </main>
</template>