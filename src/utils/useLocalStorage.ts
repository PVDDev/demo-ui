import { onMounted, ref, watch, type WatchOptions } from 'vue';

const useLocalStorage = <T>(key: string, defaultValue: T, options?: WatchOptions) => {
  const data = ref<T>(defaultValue);

  onMounted(() => {
    const storageItem = localStorage.getItem(key);
    const item = storageItem ? JSON.parse(storageItem) : defaultValue;

    if (item) {
      data.value = item;
    }
  });

  watch(
    data,
    (values) => {
      localStorage.setItem(key, JSON.stringify(values));
    },
    {
      deep: true,
      ...options
    }
  );

  return data;
};

export default useLocalStorage;
