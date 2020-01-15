<template>
  <div @click.prevent="open" opened="false" ref="controller_menu" id="open-menu">
    <i id="open" class="material-icons small white-text">list</i>
    <i id="close" style="display:none" class="material-icons small white-text">close</i>
  </div>
</template>

<script>
export default {
  name: 'open-menu',
  methods: {
    open() {
      // eslint-disable-next-line eqeqeq
      if (document.getElementById('open-menu').getAttribute('opened') == 'true') {
        document.getElementById('main-sidebar')
          .removeAttribute('style');
        document.getElementById('open')
          .setAttribute('style', 'display:block');
        document.getElementById('close')
          .setAttribute('style', 'display:none');
        this.$refs.controller_menu.removeAttribute('style');
        this.$refs.controller_menu.setAttribute('opened', 'false');
      } else {
        document.getElementById('main-sidebar')
          .setAttribute('style', 'transform:translateY(0);transition-duration:.5s;z-index:99');
        document.getElementById('open')
          .setAttribute('style', 'display:none');
        document.getElementById('close')
          .setAttribute('style', 'display:block');
        this.$refs.controller_menu.setAttribute('style', 'z-index:999');
        this.$refs.controller_menu.setAttribute('opened', 'true');
      }
    },
  },
};
</script>
