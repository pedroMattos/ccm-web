<template>
  <div id="main-notes">
    <sidebar/>
    <div class="col m9 s12 main-page">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">Releases</h2>
      </blockquote>
      <div class="row container">
        <div class="col m6 s12" id="releases"></div>
        <div class="col m6 s12" id="new-releases"></div>
      </div>
    </div>
  </div>
</template>

<script>
import bd from '../firebaseinit';
import sidebar from '../Sidebar';
import back from '../svg-components/back';

export default {
  name: 'patches',
  components: {
    bd,
    sidebar,
    back,
  },
  data() {
    return {
      patches: [],
      newpatches: [],
    };
  },
  mounted() {
    // const context = this;
    // const database = bd.database();
    // console.log(database);
  },
};
</script>
