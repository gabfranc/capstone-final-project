<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();
async function logout() {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    router.push("/login");
  } catch (error) {
    console.log(error.message);
  }
}
</script>
<template>
  <main class="bg-image pt-64 overflow-x-hidden">
    <div class="bg-yellow ml-56 pt-12 pr-24 pl-24 pb-40 w-2/3">
      <h1 class="p-8 text-maroon text-2xl font-semibold italic">WELCOME! YOU ARE NOW LOGGED IN!</h1>
      <h1 class="text-maroon text-lg font-semibold">Your Email: {{ user.email }}</h1>
      <button @click="logout" type="button"
        class="bg-maroon text-white rounded shadow-sm shadow-black cursor-pointer w-16 h-8 mt-9">Logout</button>
    </div>
  </main>
</template>
<!-- <style>
.background {
  @apply bg-cover bg-center;
  background-image:
}
</style> -->
<style scoped>
.bg-image{
  background-image: url('https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  width: 1257px;
  height: 750px;
}
</style>