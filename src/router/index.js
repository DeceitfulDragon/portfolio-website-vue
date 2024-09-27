import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ContactPage from '../components/ContactPage.vue';
import WorkPage from '../components/WorkPage.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/work',
    name: 'WorkPage',
    component: WorkPage,
  },
  {
    path: '/:pathMatch(.*)*',  // undefined paths go to this 404 page
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
