<template>
    <div class="dash-block" id="main-crit-pc">
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
  }
</style>
