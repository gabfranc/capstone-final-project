<script setup>
const client = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
async function login() {
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
  <main class="h-full w-full relative bg-yellow m-auto p-48">
    <header>
      <h1 class="text-maroon text-2xl font-semibold italic">Login Page</h1>
    </header>
    <form @submit.prevent="login">

      <input type="email" placeholder="email" name="email" id="email" v-model="email" class="mt-4 cursor-text opacity-90" />
      <br>
      <input type="password" placeholder="password" name="password" id="password" v-model="password"
        class="mt-4 cursor-text opacity-90" />
      <br>
        <input type="submit" value="Log In" @click="login"
        class="bg-maroon text-white rounded shadow-sm shadow-black cursor-pointer w-16 h-8 mt-9" />
    </form>
  </main>
</template>
<style>
body {
  text-align: center;
}
</style>