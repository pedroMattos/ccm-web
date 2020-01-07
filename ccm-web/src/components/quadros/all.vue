<template>
    <div id="main-all-pc">
      <h2>Todos em manutenção</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <p class="center">Ver</p>
    </div>
</template>

<script>
export default {
  name: 'all',
  data() {
    return {
      count: '25',
    };
  },
};
</script>

<style>
  #main-all-pc {
    background-color: green;
    border-radius: 8px;
    color: white;
    height: 100px;
    width: 300px;
    padding: 10px;
  }
  #main-all-pc h2{
    font-size: 15px;
    margin: 0;
  }
  #main-all-pc p {
    margin-bottom: 0;
  }
</style>
