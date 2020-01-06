<template>
  <div id="app">
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
</style>
