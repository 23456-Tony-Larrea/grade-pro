import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';

const routes = [
    {
      path: '/hola',
      name: 'login',
      component: Login, 
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
});
export default router;