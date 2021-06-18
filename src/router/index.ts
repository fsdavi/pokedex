import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TrainerSelection from '../views/trainer-selection.vue';
import UserIdentification from '../views/user-identification.vue';
import Dashboard from '../views/dashboard.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TrainerSelection',
    component: TrainerSelection,
  }, {
    path: '/identification',
    name: 'Identification',
    component: UserIdentification,
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
