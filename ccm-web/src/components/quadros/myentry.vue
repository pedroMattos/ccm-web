<template>
    <div class="blocks">
      <div v-for="item in block" :key="item" class="dash-block col m4" id="main-all-pc">
        <h2>{{ item.modelo }}</h2>
        <p>Tombo: <span>{{ item.tombo }}</span></p>
        <p>Stiuação: <span>{{ item.situation }}</span></p>
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
          situation: '',
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
  #main-maint-pc {
    background-color: #024873;
  }
  .blocks > div {
    height: 100%;
    margin: 10px;
  }
</style>
