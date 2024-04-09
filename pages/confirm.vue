<script>
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
 <h1>Email:{{ user.email }}</h1>
 <button @click="logout" type="button">Logout</button>
</template>