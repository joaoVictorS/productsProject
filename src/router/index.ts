import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CartView from '../views/CartView.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: CartView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
