<template>
    <div class="dash-block" id="main-unu-pc">
      <h2>Máquinas paradas (sem dono)</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <p class="center">Ver</p>
    </div>
</template>

<script>
export default {
  name: 'unused',
  data() {
    return {
      count: '10',
    };
  },
};
</script>

<style>
  #main-unu-pc {
    background-color: rgb(80, 130, 173);
  }
</style>
