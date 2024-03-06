<template>
  <div class="flex-1">
    <slot name="title"></slot>
    <form @submit.prevent="onSubmit">
      <div class="w-full grid grid-cols-2 gap-x-2 gap-y-6">
        <div>
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            id="fnInput"
            v-model="fields.firstName"
          />
          <ErrorMsg :text="errorDeps.firstName" :isShow="errorDeps.firstName !== ''" />
        </div>
        <TextInput
          label="Last Name"
          id="lnInput"
          placeholder="Enter your last name"
          v-model="fields.lastName"
        />
        <div class="col-span-2">
          <TextInput
            id="mailInput"
            label="Email Address"
            placeholder="Enter your email address"
            v-model="fields.email"
          />
        </div>
        <div class="col-span-2">
          <TextInput
            id="phonenput"
            label="Phone Number"
            placeholder="Enter your phone number"
            type="number"
            v-model="fields.phone as unknown as string"
          />
        </div>
      </div>
      <button class="px-8 py-4 rounded-lg bg-[#c2c2c2] mt-4 text-lg text-white">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import useLocalStorage from '@/utils/useLocalStorage';
import { ref } from 'vue';
import TextInput from '../CustomInput/TextInput.vue';
import ErrorMsg from './ErrorMsg.vue';

interface SimplePerson {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: number;
}

const fields = useLocalStorage<SimplePerson>('todos2', {
  firstName: '',
  lastName: '',
  email: '',
  phone: undefined
});

const errorDeps = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
});

const onSubmit = () => {
  const firstName = fields?.value.firstName;

  if (firstName === '') {
    errorDeps.value.firstName = 'Không được để trống!';
    return;
  }

  alert(JSON.stringify(fields));
};
</script>
