<template>
  <div class="row">
    <sidebar/>
    <div class="main-page col m9" id="main-my-entry">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <h1>Minhas entradas</h1>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">Aqui você pode ver e atualizar todas as suas entradas</h2>
      </blockquote>
      <div class="row">
        <myentry/>
      </div>
    </div>
  </div>
</template>

<script>
import back from '../svg-components/back';
import myentry from '../quadros/myentry';
import sidebar from '../Sidebar';

export default {
  name: 'my-entry',
  components: {
    back,
    myentry,
    sidebar,
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
