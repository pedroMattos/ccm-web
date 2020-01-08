<template>
    <div id="main-code">
      <img :src="url" alt="teste">
    </div>
</template>

<script>
export default {
  name: 'QRcode',
  data() {
    return {
      dados: [
        {
          tombo: '54654646546',
          situation: '',
          modelo: 'optiplex 3010',
          issue: 'Fonte',
          date: '21/10/2019',
          uid: '18321987329179',
          name: 'Pedro',
        },
      ],
      url: '',
    };
  },
};
</script>
