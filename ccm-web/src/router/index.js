import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import NewEntry from '@/components/NewEntry';
import MyEntry from '@/components/MyEntries';
import AllEntries from '@/components/AllEntries';
import Login from '@/components/Login';
import Geral from '@/components/Geral';

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
    {
      path: '/my-entries',
      name: 'MyEntries',
      component: MyEntry,
    },
    {
      path: '/all-entries',
      name: 'AllEntries',
      component: AllEntries,
    },
    {
      path: '/login-user',
      name: 'Login',
      component: Login,
    },
    {
      path: '/gerenace',
      name: 'Admin',
      component: Geral,
    },
  ],
});
