// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/presentation/views/HomeView/Home.vue'; // Usando o alias '@' para importar corretamente
import CartView from '@/presentation/views/CartView/CartView.vue'; // Usando o alias '@' para importar corretamente

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: CartView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
