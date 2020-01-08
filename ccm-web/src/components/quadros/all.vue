<template>
    <div class="dash-block" id="main-all-pc">
      <h2>Todos (já cadastrados)</h2>
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
  }
</style>
