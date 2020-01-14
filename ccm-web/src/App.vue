<template>
  <div id="app">
    <router-view></router-view>
    <opnmenu/>
  </div>
</template>

<script>
import sidebar from './components/Sidebar';
import auth from './components/firebaseinit';
import opnmenu from './components/menu';

export default {
  name: 'App',
  components: {
    sidebar,
    opnmenu,
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
    font-size: 32px;
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
  .dash-block a p {
    border: 1px solid white;
    border-radius: 20px;
    color: white;
    float: left;
    width: 50px;
    transition-duration: .5s;
  }
  #sub-t-page {
    font-size: 24px;
  }
  blockquote.tip {
    border-left: solid #024873 5px;
  }
  .tip h2 p {
    font-size: 14px;
  }
  .modal-overlay {
    background-color: transparent;
  }
  .modal#modal1 {
    height: 410px;
  }
  @media only screen and (max-width: 600px) {
    .main-page {
      transform: translateX(0);
      width: 100%;
    }
    .dash-block {
      width: 100%;
      border-radius: 0;
    }
    .dash-block h2 {
      font-size: 12px;
    }
    #quadros-row {
      margin: 0;
    }
    .quadros.col {
      padding: 0;
    }
    #01 {
      width: 20px;
      background-color: white;
      height: 1px;
    }
    #02 {
      width: 20px;
      background-color: white;
      height: 1px;
    }
    #03 {
      width: 20px;
      background-color: white;
      height: 1px;
    }
    #open-menu {
      background-color: #024873;
      position: absolute;
      height: 45px;
      width: 45px;
      top: 0;
    }
  }
</style>
