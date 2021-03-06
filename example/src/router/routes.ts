import { RouteConfig } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
const routes: RouteConfig[] = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
