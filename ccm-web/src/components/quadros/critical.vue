<template>
    <div :class="[name, 'dash-block']">
      <h2>Estado crítico (urgência)</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <router-link
      :to="{ name: 'filter-entry', params: { nome: name } }"><p class="center">Ver</p></router-link>
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
    docRef.get().then((docs) => {
      let i = 0;
      docs.forEach((doc) => {
        // eslint-disable-next-line eqeqeq
        if (doc.data().Estado == context.name) {
          // eslint-disable-next-line no-plusplus
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
