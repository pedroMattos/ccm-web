<template>
  <div class="center" id="footer-id">
    <p>Developed by: Pedro Mattos</p>
    <p>CCM - Web Version, <span>Build-name: Beta 1.0</span></p>
  </div>
</template>

<script>
export default {
  name: 'footer-login',
};
</script>

<style>
  #footer-id {
    color: #ffffff;
    transform: translateY(200px);
  }
  #footer-id p {
    font-size: 12px;
  }
  #footer-id span {
    background-color: blue;
    padding: 1px;
    border-radius: 5px;
  }
</style>
