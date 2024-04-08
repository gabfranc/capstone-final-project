<script setup>
import { ref } from 'vue';

//DONE: import my images
const image = [
    'https://images.pexels.com/photos/4686816/pexels-photo-4686816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

//DONE: create currentIndex for carousel
const currentIndex = ref(0);
const currentImage = ref(image[currentIndex.value]);

//DONE: Import Client/User for Sign up
const client = useSupabaseClient();
const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
<template>
  <main>
    <img :src="currentImage" alt="Image Background">
    <header>
      <h1>SIGN UP</h1>
    </header>
    <form @submit.prevent="signUp">
      <input type="text" name="name" placeholder="NAME" v-model="name" />
      <input type="email" name="email" placeholder="EMAIL" v-model="email" />
      <input type="password" name="password" placeholder="password" v-model="password" />
      <button type="submit" value="sign-in" @click="signUp">SIGN UP</button>
    </form>
  </main>
</template>