<template>
  <div id="main-filter">
    <sidebar v-if="uid != ''"/>
    <div class="main-page col m9" id="main-all-entry">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <h1>Todas entradas ({{ name }})</h1>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">Veja todas as entradas
        <br><p>Lembre-se que só pode editar suas entradas</p></h2>
      </blockquote>
      <div class="row">
        <filterentry/>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../firebaseinit';
import back from '../svg-components/back';
import filterentry from '../quadros/filter-entry';
import sidebar from '../Sidebar';

export default {
  name: 'filterEntry',
  components: {
    back,
    filterentry,
    sidebar,
  },
  data() {
    return {
      uid: '',
      name: '',
    };
  },
  mounted() {
    this.name = this.$router.history.current.params.nome;
    this.uid = auth.app.auth().currentUser.uid;
  },
};
</script>
