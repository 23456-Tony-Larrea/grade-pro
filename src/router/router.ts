import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component:Home, 
  },
    {
      path: '/login',
      name: 'login',
      component: Login, 
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
});
export default router;