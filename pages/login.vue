<script setup>
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

  const email = ref("");
  const password = ref("");

  let { data, error } = await SupabaseAuthClient.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
</script>
<template>
  <main>
    <form>
      <div>
        <input type="email" id="email" name="email" v-model="email" />
      </div>
      <div>
        <input type="password" id="password" name="password" v-model="password" />
      </div>
      <input type="submit" value="Log In" @click="useSignIn" />
    </form>
  </main>
</template>