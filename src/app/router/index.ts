import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import ProductsPage from '@/pages/products';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutPage,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
