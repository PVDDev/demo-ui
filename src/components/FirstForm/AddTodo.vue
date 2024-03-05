<template>
  <form @submit.prevent="onSubmit">
    <div class="w-96 mb-4 flex gap-4 items-center">
      <TextInput id="todoInput" v-model="termTodo" placeholder="Add new todo" is-required />
      <button
        class="py-2 px-4 rounded-sm bg-[#000] flex items-center text-white text-xl"
        type="submit"
      >
        +
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import TextInput from '../CustomInput/TextInput.vue';

const termTodo = ref<string>('');
const emit = defineEmits(['addTodo']);

const onSubmit = () => {
  if (termTodo.value === '') {
    return;
  }

  emit('addTodo', termTodo.value.trim());
  termTodo.value = '';
};
</script>
