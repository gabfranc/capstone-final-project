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
    router.push("/confirm");
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
<template>
  <main>
    <header>
      <h1>Login Page</h1>
    </header>
    <form @submit.prevent="login">
      <label for="email">
        Email:
        <input type="email" name="email" id="email" v-model="email" />
      </label>
      <label for="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </label>
      <input type="submit" value="login" @click="login" />
    </form>
  </main>
</template>
<style>
body {
  text-align: center;
}
</style>
