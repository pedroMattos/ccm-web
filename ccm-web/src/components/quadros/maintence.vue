<template>
    <div id="main-maint-pc">
      <h2>Em manutenção</h2>
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
    border-radius: 8px;
    color: white;
    height: 100px;
    width: 300px;
    padding: 10px;
  }
  #main-maint-pc h2{
    font-size: 15px;
    margin: 0;
  }
  #main-maint-pc p {
    margin-bottom: 0;
  }
</style>
