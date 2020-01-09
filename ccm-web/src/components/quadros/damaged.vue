<template>
    <div :class="[name, 'dash-block']">
      <h2>Inutilizados</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <p class="center">Ver</p>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'damaged',
  data() {
    return {
      count: '',
      name: 'inutilizado',
    };
  },
  created() {
    var context = this;
    var docRef = bd.collection("Máquinas");
    docRef.get().then(function(doc) {
      var i = 0;
      doc.forEach(doc => {
        if(doc.data().Estado == context.name) {
          i ++;
          context.count = i;
        }
      });
    });
  },
};
</script>

<style>
  #main-dam-pc, .inutilizado {
    background-color: white;
    color: #D9042B;
    border: solid #D9042B 1px;
  }
</style>
