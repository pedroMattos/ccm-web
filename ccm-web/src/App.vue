<template>
  <div class="row" id="app">
    <sidebar/>
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
</style>
