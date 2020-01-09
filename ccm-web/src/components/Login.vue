<template>
  <div id="main-login"><formLogin/></div>
</template>

<script>
import formLogin from './forms/formLogin';

export default {
  name: 'Login',
  components: {
    formLogin,
  },
};
</script>
