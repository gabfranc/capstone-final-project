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
  <main class="backimg pt-64 overflow-x-hidden">
    <div
      class="bg-yellow opacity-85 sm:ml-24 sm:w-96 sm:pl-24 sm:pr-24 md:ml-56 pt-12 md:pr-24 md:pl-24 pb-40 md:w-2/3">
      <header>
        <h1 class="text-maroon text-2xl font-semibold italic">Login Page</h1>
      </header>
      <form @submit.prevent="login">
        <input type="email" placeholder="email" name="email" id="email" v-model="email"
          class="mt-4 cursor-text opacity-90" />
        <br>
        <input type="password" placeholder="password" name="password" id="password" v-model="password"
          class="mt-4 cursor-text opacity-90" />
        <br>
        <input type="submit" value="Log In" @click="login"
          class="bg-maroon text-white rounded shadow-sm shadow-black cursor-pointer w-16 h-8 mt-9" />
      </form>
    </div>
  </main>
</template>
<style>
body {
  text-align: center;
}

.backimg {
  background-image: url('https://images.pexels.com/photos/3620705/pexels-photo-3620705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  width: 1257px;
  height: 750px;
}
</style>