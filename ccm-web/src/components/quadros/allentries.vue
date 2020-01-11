<template>
    <div class="blocks">
      <div v-for="item in block" :key="item.tombo"
      :class="[item.situation, 'dash-block', 'col', 'm4', 'entry']">
        <h2>{{ item.modelo }}</h2>
        <div class="row">
          <div class="col m9">
            <p>Tombo: <span>{{ item.tombo }}</span></p>
            <p>Estado: <span>{{ item.situation }}</span></p>
            <p>Problema: {{ item.issue }}</p>
            <p>Situação: {{ item.details }}</p>
            <p>Data de entrada: {{ item.date }}</p>
            <p>Responsavel: {{ item.name }}</p>
            <p>Dono: {{ item.owner }}</p>
          </div>
          <div class="col m3">
            <a target="_blank" :href="item.url">
              <img :src="item.url" width="50px" alt="qrcode">
            </a>
          </div>
        </div>
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
      doc.forEach((docs) => {
        const data = {
          uid: docs.Uid,
          tombo: docs.data().Tombo,
          details: docs.data().Detalhes,
          date: docs.data().Data,
          modelo: docs.data().Modelo,
          name: docs.data().Responsável,
          situation: docs.data().Estado,
          owner: docs.data().Dono,
          issue: docs.data().Problema,
          url: docs.data().QrCode,
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
