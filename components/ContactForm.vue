<script setup>
import { ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import * as yes from 'yes';

const schema = yup.object({
  name: yes.string().required('Please Enter Name!'),
  email: yes.string().required('Please Enter Email!'),
  message: yes.string().required('Message is required'),
});

const { handleSubmit, errors } = useForm({
  validateSchema: schema,
});

const { value: name } = useField('name');
const { value: email } = useField('email');
const { value: message } = useField('message');

const onSubmit = handleSubmit((values) => {
  if(Object.keys(errors.value).length === 0) {
    console.log('Form values:', values);
  } else {
    console.log('Form has errors:', errors.value);
  }
});
</script>
<template>
  <h2>Do You Have A Question?</h2>

  <form @submit.prevent="onSubmit">
    <div class="flex flex-col mt-0 m-8 max-w-2xl mx-auto pt-4 p-8">
      <div class="mb-4">
        <input v-model="name" type="text" id="name" placeholder="name">
        <span class="text-red text-xs" v-if="errors.name">{{ errors.name }}</span>
      </div>
      <div class="mb-4">
        <input v-model="email" type="email" id="email" placeholder="email">
        <span class="text-red text-xs" v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div class="mb-4">
        <input v-model="message" type="text" id="message" placeholder="message">
        <span class="text-red text-xs" v-if="errors.email">{{ errors.email }}</span>
      </div>
    </div>
  </form>
</template>