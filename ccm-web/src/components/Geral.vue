<template>
  <div class="row">
    <sidebar v-if="uid != ''"/>
    <div class="main-page col m9" id="main-geral">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <h1>Gerenciador</h1>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">
        Aqui você pode adicionar usuários, e outras coisas que só adms podem fazer</h2>
      </blockquote>
    </div>
  </div>
</template>

<script>
import back from './svg-components/back';
// import auth from './firebaseinit';
import sidebar from './Sidebar';

export default {
  name: 'geral',
  components: {
    back,
    sidebar,
  },
};
</script>
