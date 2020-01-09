<template>
    <div class="main-page col m9" id="main-all-entry">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <h1>Todas entradas</h1>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">Veja todas as entradas
        <br><p>Lembre-se que só pode editar suas entradas</p></h2>
      </blockquote>
      <div class="row">
        <allentries/>
      </div>
    </div>
</template>

<script>
import back from './svg-components/back';
import allentries from './quadros/allentries';

export default {
  name: 'all-entry',
  components: {
    back,
    allentries,
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
  .tip h2 p {
    font-size: 14px;
  }
</style>
