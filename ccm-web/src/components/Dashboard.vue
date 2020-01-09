<template>
  <div class="row">
    <sidebar v-if="uid != null"/>
    <div class="col m9 main-page" id="main-dashboard">
      <h1>CCM - Web Version <span>Embryo Ⅰ</span> <iconVer/></h1>
      <div class="row">
        <div class="col m4 quadros"><all/></div>
        <div class="col m4 quadros"><maint/></div>
        <div class="col m4 quadros"><crit/></div>
      </div>
      <div class="row">
        <div class="col m4 quadros"><dam/></div>
        <div class="col m4 quadros"><unused/></div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from './firebaseinit';
// importa os quadros
import all from './quadros/all';
import crit from './quadros/critical';
import dam from './quadros/damaged';
import maint from './quadros/maintence';
import unused from './quadros/unusable';
import iconVer from './svg-components/embryo-version';
import sidebar from './Sidebar';

export default {
  name: 'dashboard',
  // inicia componentes externos
  components: {
    all,
    iconVer,
    crit,
    dam,
    maint,
    unused,
    sidebar,
  },
  data() {
    return {
      uid: '',
    };
  },
  mounted() {
    this.uid = auth.app.auth().currentUser.uid
  },
};
</script>

<style>
  #main-dashboard h1{
    font-size: 32px;
  }
    #main-dashboard h1 span{
      background-color: green;
      padding: 2px;
      border-radius: 5px;
      color: white;
      font-size: 12px;
  }
  .quadros {
    position: relative;
  }
</style>
