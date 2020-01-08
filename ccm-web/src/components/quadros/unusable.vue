<template>
    <div class="dash-block" id="main-maint-pc">
      <h2>Máquinas paradas (sem dono)</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <p class="center">Ver</p>
    </div>
</template>

<script>
export default {
  name: 'maintence',
  data() {
    return {
      count: '10',
    };
  },
};
</script>

<style>
  #main-maint-pc {
    background-color: #024873;
  }
</style>
