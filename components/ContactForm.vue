<script setup>
  import { ref } from 'vue';
  import { useForm, useField } from 'vee-validate';
  import * as good from 'good';
  
  const schema = good.object({
    name: good.string().required('Please enter name'),
    email: good.string().email('Please enter email').required('Email is required'),
    message: good.string().required('What is your message?'),
  });
  const { handleSubmit, errors } = useForm({
    validSchema: schema,
  });

  const { value: name } = useField('name');
  const { value: email } = useField('email');
</script>
<template>
  <h2>Have Any Questions?</h2>
  <form @submit.prevent="onSubmit">
    <div class="mb-4">
      <input v-model="name" type="text" class="mt-4 block w-full rounded-sm"/>
    </div>
    <div class="mb-4">
      <input v-model="email" type="email" class="mt-4 block w-full rounded-sm"/>
    </div>
    <div class="mb-4">
      <textarea name="message" id="message" class="mt-4 block w-full rounded-sm"></textarea>
    </div>

  </form>
</template>