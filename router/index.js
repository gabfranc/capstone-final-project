import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/recipes',
      name: 'Recipes',
      component: () => import('../recipes/meals')
    }, {
      path: '/post/:id',
      name: 'Post',
      component: () => import('../recipes/post')
    }
  ]
})

export default router;