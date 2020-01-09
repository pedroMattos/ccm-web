<template>
    <div class="blocks">
      <div v-for="item in block" :key="item.tombo" class="dash-block col m4 entry" id="main-all-pc">
        <h2>{{ item.modelo }}</h2>
        <p>Tombo: <span>{{ item.tombo }}</span></p>
        <p>Stiuação: <span>{{ item.situation }}</span></p>
        <p>Detalhes: {{ item.details }}</p>
        <p>Data de entrada: {{ item.date }}</p>
        <p>Responsavel: {{ item.name }}</p>
        <p class="center">Atualizar</p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'myentry',
  data() {
    return {
      block: [
        {
          tombo: '54654646546',
          situation: 'Sem dono',
          details: 'Sem detalhes',
          modelo: 'optiplex 3010',
          issue: 'Fonte',
          date: '21/10/2019',
          uid: '18321987329179',
          name: 'Pedro',
        },
        {
          tombo: '54654646542',
          situation: 'Estado Crítico',
          details: 'Aguardando Assistencia',
          modelo: 'optiplex 3010',
          issue: 'Fonte',
          date: '21/10/2019',
          uid: '18321987329179',
          name: 'Pedro',
        },
      ],
    };
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
