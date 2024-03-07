<template>
  <div class="w-full">
    <label
      :for="id"
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      v-if="!!label"
    >
      {{ label }}
    </label>
    <input
      v-model="model"
      :id="id"
      class="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
      :placeholder="placeholder"
      :required="isRequired"
      :type="type"
    />
  </div>
</template>

<script setup lang="ts">
const model = defineModel();

defineProps({
  label: String,
  id: { type: String, required: true, default: '' },
  placeholder: {
    type: String,
    default: 'Enter your input'
  },
  isRequired: { type: Boolean, default: false },
  type: {
    type: String,
    default: 'text'
  }
});
</script>
