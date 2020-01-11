<template>
    <div class="blocks">
      <div v-for="item in block" :key="item.tombo"
      :class="[item.situation, 'dash-block', 'col', 'm4', 'entry']"  >
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
  name: 'myentry',
  data() {
    return {
      block: [],
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas').where('Uid', '==', window.uid);
    docRef.get().then((doc) => {
      // eslint-disable-next-line no-shadow
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
          url: doc.data().QrCode,
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
