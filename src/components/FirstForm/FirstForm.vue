<template>
  <div class="w-96">
    <h1 class="text-2xl font-bold mb-6">{{ title }}</h1>
    <AddTodo @add-todo="createTodo" />
    <ul class="flex flex-col gap-4 list-none" name="todoList">
      <TodoItem
        v-for="(todo, idx) in todos"
        :key="idx"
        :data="todo"
        :id="idx"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
    <div class="mt-6 flex justify-between items-center">
      <p>List is have {{ todos.length }} items</p>
      <button class="p-2 text-[#f87171]" v-if="todos.length > 0" @click="deleteAllTodo">
        Delete All
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AddTodo from './AddTodo.vue';
import TodoItem from './TodoItem.vue';

defineProps({ title: { type: String, required: true } });

const todos: Array<string> = ref([]);

const createTodo = (value: string) => {
  if (todos.value.includes(value)) {
    return;
  }

  todos.value.push(value);
};

const updateTodo = (idx: number, newTodo: string) => {
  todos.value[idx] = newTodo;
};

const deleteTodo = (idx: number) => {
  if (idx !== -1) {
    todos.value.splice(idx, 1);
  }
};

const deleteAllTodo = () => {
  todos.value = [];
};
</script>
