<template>
    <div id="main-new-entry">
      <h1>Nova entrada <span>Embryo version</span></h1>
    </div>
</template>

<script>
export default {
  name: 'newEntry',
};
</script>

<style>
  #main-new-entry {
    padding-top: 20px;
    padding-left: 20px;
  }
  #main-new-entry h1{
    font-size: 32px;
  }
    #main-new-entry h1 span{
      background-color: green;
      padding: 2px;
      border-radius: 5px;
      color: white;
      font-size: 12px;
  }
  .quadros {
    position: relative;
  }
</style>
