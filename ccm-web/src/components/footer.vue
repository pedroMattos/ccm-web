<template>
  <div class="center" id="footer-id">
    <p>Developed by: Pedro Mattos</p>
    <p>CCM - Web Version, <span>Build-name: Embryo Ⅰ</span></p>
  </div>
</template>

<script>
export default {
  name: 'footer-login',
};
</script>

<style>
  #footer-id {
    background-color: #024873;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
  #footer-id p {
    font-size: 12px;
  }
  #footer-id span {
    background-color: green;
    padding: 1px;
    border-radius: 5px;
  }
</style>
