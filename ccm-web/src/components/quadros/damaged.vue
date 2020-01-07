<template>
    <div id="main-dam-pc">
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
    border-radius: 8px;
    color: #D9042B;
    height: 100px;
    width: 300px;
    padding: 10px;
    border: solid #D9042B 1px;
  }
  #main-dam-pc h2{
    font-size: 15px;
    margin: 0;
  }
  #main-dam-pc p {
    margin-bottom: 0;
  }
</style>
