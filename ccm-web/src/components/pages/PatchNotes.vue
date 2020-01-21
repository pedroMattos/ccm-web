<template>
  <div class="row" id="main-notes">
    <sidebar/>
    <div class="col m9 s12 main-page">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">Releases</h2>
      </blockquote>
      <div class="row container">
        <div class="col m6 s12" id="releases">{{ patches }}</div>
        <div class="col m6 s12" id="new-releases">{{ newpatches }}</div>
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
    const context = this;
    const Patch = bd.collection('Patch');
    const newP = bd.collection('Prox_chngs');
    Patch.get().then((data) => {
      data.forEach((doc) => {
        context.patches = doc.data();
      });
    });
    newP.get().then((data) => {
      data.forEach((doc) => {
        context.newpatches = doc.data();
      });
    });
  },
};
</script>
