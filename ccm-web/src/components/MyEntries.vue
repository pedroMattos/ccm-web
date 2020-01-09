<template>
    <div class="main-page col m9" id="main-my-entry">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <h1>Minhas entradas</h1>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">Aqui você pode ver e atualizar todas as suas entradas</h2>
      </blockquote>
      <div class="main-page row">
        <myentry/>
      </div>
    </div>
</template>

<script>
import back from './svg-components/back';
import myentry from './quadros/myentry';

export default {
  name: 'my-entry',
  components: {
    back,
    myentry,
  },
};
</script>

<style>
  #sub-t-page {
    font-size: 24px;
  }
  blockquote.tip {
    border-left: solid #024873 5px;
  }
</style>
