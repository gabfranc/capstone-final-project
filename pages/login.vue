<script setup>
import { ref } from 'vue';

//DONE: import my images
const image = [
    'https://images.pexels.com/photos/4686816/pexels-photo-4686816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

//DONE: create currentIndex for carousel
const currentIndex = ref(0);
const currentImage = ref(image[currentIndex.value]);

const client = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
async function login(){
  try {
    let { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    console.log("login", data, error);
    if (error) throw error;
    router.push("./confirm");
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
<template>
  <main class="relative">
    <img :src="currentImage" class="relative" alt="Image Backgrounnd">
    <div class="relative m-auto p-auto">
      <header class="relative">LOG IN</header>
      <form @submit.prevent="login" class="relative block">
        <div>
        <input type="email" name="email" placeholder="EMAIL" id="email" v-model="email" />
        <input type="password" name="password" placeholder="PASSWORD" id="password" v-model="password" />
        </div>
        <button type="submit" value="login" @click="login"> LOG IN </button>
      </form>
    </div>
  </main>
</template>
