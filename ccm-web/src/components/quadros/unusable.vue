<template>
    <div class="dash-block" id="main-unu-pc">
      <h2>Máquinas paradas (livres)</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <router-link v-if="count"
      :to="{ name: 'filter-entry', params: { nome: name } }"><p class="center">Ver</p></router-link>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'unused',
  data() {
    return {
      count: null,
      name: 'sem-dono',
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas');
    docRef.get().then((doc) => {
      let i = 0;
      // eslint-disable-next-line no-shadow
      doc.forEach((doc) => {
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
  #main-unu-pc, .sem-dono {
    background-color: rgb(80, 130, 173);
  }
</style>
