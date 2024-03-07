import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SecondView from '@/views/SecondView.vue';
import { checkAuth, isAuthenticated } from './auth';
import LoginView from '@/views/LoginView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      auth: true
    }
  },
  {
    path: '/secondView',
    name: 'secondView',
    component: SecondView,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to, _from, next) => {
  if (!to.meta.auth) {
    next();
    return;
  }
  checkAuth();

  if (to.name !== 'login' && !isAuthenticated.value) {
    next({ path: '/login' });

    return;
  }

  next();
});

export default router;
