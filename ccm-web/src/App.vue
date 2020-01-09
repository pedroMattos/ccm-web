<template>
  <div class="row" id="app">
    <sidebar v-if="uid != ''"/>
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    sidebar,
  },
  data() {
    return {
      uid: '',
    };
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
