import { ref } from 'vue';

const LOCAL_STORAGE_TOKEN_KEY = 'todoToken';

export const isAuthenticated = ref(false);

const login = () => {
  const dummyToken = 'dummyAuthToken';
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, dummyToken);
  isAuthenticated.value = true;
};

const checkAuth = () => {
  isAuthenticated.value = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) !== null;
};

const logout = () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  isAuthenticated.value = false;
};

export { login, logout, checkAuth };
