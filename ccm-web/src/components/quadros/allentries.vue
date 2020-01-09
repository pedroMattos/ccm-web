<template>
    <div class="blocks">
      <div v-for="item in block" :key="item.tombo" :class="[item.situation, 'dash-block', 'col', 'm4', 'entry']">
        <h2>{{ item.modelo }}</h2>
        <p>Tombo: <span>{{ item.tombo }}</span></p>
        <p>Situação: <span>{{ item.situation }}</span></p>
        <p>Problema: {{ item.issue }}</p>
        <p>Detalhes: {{ item.details }}</p>
        <p>Data de entrada: {{ item.date }}</p>
        <p>Responsavel: {{ item.name }}</p>
        <p>Dono: {{ item.owner }}</p>
        <p class="center">Atualizar</p>
    </div>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'allentries',
  data() {
    return {
      block: [],
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas');
    docRef.get().then((doc) => {
      doc.forEach((doc) => {
        const data = {
          uid: doc.Uid,
          tombo: doc.data().Tombo,
          details: doc.data().Detalhes,
          date: doc.data().Data,
          modelo: doc.data().Modelo,
          name: doc.data().Responsável,
          situation: doc.data().Estado,
          owner: doc.data().Dono,
          issue: doc.data().Problema,
        };
        context.block.push(data);
      });
    });
  },
};
</script>

<style>
  .blocks > div {
    height: 100%;
    margin: 10px;
  }
  .blocks .entry {
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
