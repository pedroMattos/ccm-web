<template>
    <div :class="[name, 'dash-block']">
      <h2>Inutilizados</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <router-link v-if="count"
      :to="{ name: 'filter-entry', params: { nome: name } }"><p class="center">Ver</p></router-link>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'damaged',
  data() {
    return {
      count: null,
      name: 'inutilizado',
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
  .inutilizado {
    background-color: white;
    color: #D9042B;
    border: solid #D9042B 1px;
  }
  .inutilizado.dash-block a p {
    border: 1px solid white;
    border-radius: 20px;
    color: white;
    background-color: #D9042B;
    float: left;
    width: 50px;
  }
</style>
