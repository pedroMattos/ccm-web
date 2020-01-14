<template>
  <div @click.prevent="open" id="open-menu">
    <div id="01"></div>
    <div id="02"></div>
    <div id="03"></div>
  </div>
</template>

<script>
export default {
  name: 'open-menu',
  methods: {
    open() {
      document.getElementById('main-sidebar')
        .setAttribute('style', 'transform:translateY(0);transition-duration:.5s;z-index:99');
    },
  },
};
</script>
