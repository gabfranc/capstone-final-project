// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import meals from '../articles/index.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/articles/:id', component: RecipeDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
