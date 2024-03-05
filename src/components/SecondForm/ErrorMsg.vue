<template>
  <span :v-if="isShow" class="text-[#f87171]">{{ text }}</span>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'Co loi'
  },
  isShow: {
    type: Boolean,
    default: false
  }
});
</script>
