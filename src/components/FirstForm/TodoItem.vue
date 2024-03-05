<template>
  <li class="w-80" name="todoItem">
    <div class="flex gap-4 items-center" v-if="!isEdit">
      <span class="py-2 px-4 bg-[#f4f4f5] w-56">{{ data }}</span>
      <button @click="handleToggleEdit()">Edit</button>
      <button @click="handleDelete()">Delete</button>
    </div>
    <div class="flex gap-4 items-center" v-else>
      <TextInput id="updateTodoInput" v-model="termTodo" is-required />
      <button @click="handleSubmit()">Submit</button>
      <button @click="handleToggleEdit()">Cancel</button>
    </div>
  </li>
</template>

<script setup lang="ts">
import TextInput from '../CustomInput/TextInput.vue';
import { ref } from 'vue';

const isEdit: Boolean = ref(false);
const termTodo = ref<string>('');
const emit = defineEmits(['updateTodo', 'deleteTodo']);

const { id, data } = defineProps({
  data: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
});

const handleToggleEdit = () => {
  isEdit.value = !isEdit.value;
};

const handleSubmit = () => {
  if (termTodo.value !== data) {
    emit('updateTodo', id, termTodo.value.trim());
  }

  handleToggleEdit();
  termTodo.value = '';
};

const handleDelete = () => {
  emit('deleteTodo', id);
};
</script>
