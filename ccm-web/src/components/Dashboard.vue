<template>
    <div class="col md9" id="main-dashboard">
      <h1>CCM - Web Version <span>Embryo version</span> <iconVer/></h1>
      <div class="row">
        <div class="col md4 quadros"><all/></div>
        <div class="col md4 quadros"><all/></div>
        <div class="col md4 quadros"><all/></div>
      </div>
    </div>
</template>

<script>
import all from './quadros/all';
import iconVer from './svg-components/embryo-version';

export default {
  name: 'dashboard',
  components: {
    all,
    iconVer,
  },
};
</script>

<style>
  #main-dashboard {
    padding-top: 20px;
    padding-left: 20px;
  }
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
