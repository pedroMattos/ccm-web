<template>
    <div :class="[name, 'dash-block']">
      <h2>Estado crítico (urgência)</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <p class="center">Ver</p>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'critical',
  data() {
    return {
      count: '',
      name: 'estado-critico',
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas');
    docRef.get().then((doc) => {
      let i = 0;
      doc.forEach((doc) => {
        if (doc.data().Estado == context.name) {
          i++;
          context.count = i;
        }
      });
    });
  },
};
</script>

<style>
  #main-crit-pc, .estado-critico {
    background-color: #D9042B;
  }
</style>
