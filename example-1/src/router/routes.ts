import { RouteConfig } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
import Index from 'pages/Index.vue';
const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/Index.vue') }]
  // }
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: Index }]
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
