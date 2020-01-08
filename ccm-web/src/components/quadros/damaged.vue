<template>
    <div class="dash-block" id="main-dam-pc">
      <h2>Inutilizados</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <p class="center">Ver</p>
    </div>
</template>

<script>
export default {
  name: 'damaged',
  data() {
    return {
      count: '2',
    };
  },
};
</script>

<style>
  #main-dam-pc {
    background-color: white;
    color: #D9042B;
    border: solid #D9042B 1px;
  }
</style>
