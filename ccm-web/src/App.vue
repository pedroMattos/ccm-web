<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from './components/Sidebar';
import auth from './components/firebaseinit';

export default {
  name: 'App',
  components: {
    sidebar,
  },
  data() {
    return {
    };
  },
  mounted() {
    // const context = this;
    auth.app.auth().onAuthStateChanged((user) => {
      // se user.uid não estiver vazio, loga, senao nulo
      window.uid = user ? user.uid : null;
      if (!window.uid) {
        if (window.location.pathname.indexOf('/login-user') < 0) {
          this.$router.push({ name: 'Login' });
          location.reload();
        }
      }
    });
  },
};
</script>

<style>
  li {
    list-style: none;
  }
  a {
    color: black;
  }
  .row#app {
    margin: 0;
    padding: 0;
  }
  .main-page {
    padding-top: 20px;
    padding-left: 20px;
    transform: translateX(300px);
  }
  .main-page h1 {
    font-size: 32px
  }
  .dash-block {
    border-radius: 8px;
    color: white;
    height: 110px;
    width: 300px;
    padding: 10px;
  }
  .dash-block h2 {
    font-size: 15px;
    margin: 0;
  }
  .dash-block p {
    margin-bottom: 0;
  }
</style>
