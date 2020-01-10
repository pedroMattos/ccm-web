<template>
    <div :class="[name,'dash-block']">
      <h2>Em manutenção</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <router-link
      :to="{ name: 'filter-entry', params: { nome: name } }"><p class="center">Ver</p></router-link>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'maintence',
  data() {
    return {
      count: '',
      name: 'em-manutencao',
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas');
    docRef.get().then((doc) => {
      let i = 0;
      doc.forEach((docs) => {
        // eslint-disable-next-line eqeqeq
        if (docs.data().Estado == context.name) {
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
  #main-maint-pc, .em-manutencao {
    background-color: #024873;
  }
</style>
