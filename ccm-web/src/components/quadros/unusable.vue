<template>
    <div class="dash-block" id="main-unu-pc">
      <h2>Máquinas paradas (sem dono)</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <p class="center">Ver</p>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'unused',
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
  #main-unu-pc, .maquina-parada {
    background-color: rgb(80, 130, 173);
  }
</style>
