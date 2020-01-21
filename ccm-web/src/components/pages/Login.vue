<template>
  <div id="main-login"><formLogin/><footerL/></div>
</template>

<script>
import formLogin from '../forms/formLogin';
import footerL from '../footer';

export default {
  name: 'Login',
  components: {
    formLogin,
    footerL,
  },
};
</script>

<style>
  #main-login {
    background-color: rgb(45, 45, 45);
    min-height: 100vh;
  }
</style>
