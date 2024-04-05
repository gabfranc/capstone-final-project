<script setup>
const client = useSupabaseClient();
const router = useRouter();
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    console.log("data", data, email, password);
    if (error) throw error;
    successMsg.value = "Check your email to confirm your account";
    router.push("/login");
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
<template>
  <main>
    <header>
      <h1>Sign Up Page</h1>
    </header>
    <form @submit.prevent="signUp">
      <label for="email">
        Email:
        <input type="email" name="email" v-model="email" />
      </label>
      <label for="password">
        Password:
        <input type="password" name="password" v-model="password" />
      </label>
      <input type="submit" value="sign-in" @click="signUp" />
    </form>
  </main>
</template>
<style>
body {
  text-align: center;
}
</style>
