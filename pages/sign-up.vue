<script setup>
const client = useSupabaseClient();
const router = useRouter();
const user = useSupabaseUser();
const email = ref("");
const name = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      name: name.value,
      user: user.value,
      email: email.value,
      password: password.value,
    });
    console.log("data", data, user, name, email, password);
    if (error) throw error;
    successMsg.value = "Check your email to confirm your account";
    router.push("/login");
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
<template>
  <main class="backimage pt-64 overflow-x-hidden">
    <div
      class="bg-yellow opacity-85 sm:ml-24 sm:w-96 sm:pl-24 sm:pr-24 md:ml-56 pt-12 md:pr-24 md:pl-24 pb-40 md:w-2/3">
      <header>
        <h1 class="text-maroon text-2xl text-center font-semibold italic">Sign Up Page</h1>
      </header>
      <form @submit.prevent="signUp">
        <input type="text" placeholder="name" name="name" id="name" v-model="name" class="mt-4 cursor-text opacity-90">
        <br>
        <input type="email" placeholder="email" name="email" id="email" v-model="email"
          class="mt-4 cursor-text opacity-90" />
        <br>
        <input type="password" placeholder="password" name="password" id="password" v-model="password"
          class="mt-4 cursor-text opacity-90" />
        <br>
        <input type="submit" value="Sign Up" @click="signUp"
          class="bg-maroon text-white rounded shadow-sm shadow-black cursor-pointer w-16 h-8 mt-9" />
      </form>
    </div>
  </main>
</template>
<style>
body {
  text-align: center;
  overflow-x: hidden;
}

.backimage {
  background-image: url('https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  width: 1257px;
  height: 750px;
}
</style>