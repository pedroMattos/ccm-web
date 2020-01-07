<template>
    <div id="main-crit-pc">
      <h2>Estado crítico (urgência)</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <p class="center">Ver</p>
    </div>
</template>

<script>
export default {
  name: 'critical',
  data() {
    return {
      count: '20',
    };
  },
};
</script>

<style>
  #main-crit-pc {
    background-color: #D9042B;
    border-radius: 8px;
    color: white;
    height: 100px;
    width: 300px;
    padding: 10px;
  }
  #main-crit-pc h2{
    font-size: 15px;
    margin: 0;
  }
  #main-crit-pc p {
    margin-bottom: 0;
  }
</style>
