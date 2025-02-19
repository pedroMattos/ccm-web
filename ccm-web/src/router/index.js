import Vue from 'vue';
import Router from 'vue-router';
import VueQrcodeReader from 'vue-qrcode-reader';
// import qrcode from 'instascan';
import Dashboard from '@/components/pages/Dashboard';
import NewEntry from '@/components/pages/NewEntry';
import MyEntry from '@/components/pages/MyEntries';
import AllEntries from '@/components/pages/AllEntries';
import Login from '@/components/pages/Login';
import Geral from '@/components/pages/Geral';
import filterEntry from '@/components/pages/Filterpage';
import indexFilter from '@/components/pages/indexFilter';
import QrReader from '@/components/pages/QRCodeReader';
import PTNotes from '@/components/pages/PatchNotes';

Vue.use(Router, VueQrcodeReader);

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
      component: indexFilter,
      children: [
        {
          path: '',
          name: 'AllEntries',
          component: AllEntries,
        },
        {
          path: ':nome',
          name: 'filter-entry',
          component: filterEntry,
        },
      ],
    },
    {
      path: '/login-user',
      name: 'Login',
      component: Login,
    },
    {
      path: '/gerence',
      name: 'Admin',
      component: Geral,
    },
    {
      path: '/reader',
      name: 'QrReader',
      component: QrReader,
    },
    {
      path: '/patch',
      name: 'PatchNotes',
      component: PTNotes,
    },
  ],
});
