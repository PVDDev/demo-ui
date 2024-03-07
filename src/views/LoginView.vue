<template>
  <section class="login">
    <h1 class="login-header">Login</h1>
    <form class="login-form" @submit.prevent="handleSubmit">
      <TextInput
        v-model="formRef.username"
        id="username"
        label="Username"
        placeholder="admin"
        is-required
      />
      <TextInput
        v-model="formRef.password"
        id="password"
        label="Password"
        placeholder="1"
        is-required
      />
      <button class="login-submit">Login Now</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TextInput from '@/components/CustomInput/TextInput.vue';
import { login } from '@/router/auth';
import router from '@/router';

interface LoginForm {
  username: string;
  password: string;
}

const formRef = ref<LoginForm>({
  username: '',
  password: ''
});

const handleSubmit = () => {
  const username = formRef.value.username;
  const password = formRef.value.password;
  if (username === 'admin' && password === '1') {
    login();
    router.push('/');
  } else {
    alert('Sai ten dang nhap hoac mat khau!');
  }
};
</script>

<style scoped>
.login {
  width: 28rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 15px 11px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;
}
.login .login-header {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.login .login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.login .login-submit {
  padding-block: 8px;
  background-color: #ef4444;
  color: white;
  margin-top: 1rem;
}
</style>
