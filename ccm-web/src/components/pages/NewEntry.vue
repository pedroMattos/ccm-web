<template>
  <div class="row">
    <sidebar v-if="uid != ''"/>
    <div class="main-page col m9" id="main-new-entry">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <h1>Nova entrada</h1>
        <blockquote class="tip">
          <h2 class="grey-text lighten-2"
          id="sub-t-page"><p>Dê entradas nas máquinas em manutenção</p></h2>
        </blockquote>
      <newEntryForm/>
    </div>
  </div>
</template>

<script>
import auth from '../firebaseinit';
import back from '../svg-components/back';
import newEntryForm from '../forms/newEntryForm';
import sidebar from '../Sidebar';

export default {
  name: 'newEntry',
  components: {
    back,
    newEntryForm,
    sidebar,
  },
  data() {
    return {
      uid: '',
    };
  },
  mounted() {
    this.uid = auth.app.auth().currentUser.uid;
  },
};
</script>

<style>
  blockquote h2 p {
    font-size: 24px;
  }
</style>
