import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import NewEntry from '@/components/NewEntry';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Dashboard,
    },
    {
      path: '/new-entry',
      name: 'NewEntry',
      component: NewEntry,
    },
  ],
});
