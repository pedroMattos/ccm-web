<template>
    <div :class="[name,'dash-block']">
      <h2>Em manutenção</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <p class="center">Ver</p>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'maintence',
  data() {
    return {
      count: '',
      name: 'em-manutencao',
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas');
    docRef.get().then((doc) => {
      let i = 0;
      doc.forEach((doc) => {
        if (doc.data().Estado == context.name) {
          i++;
          context.count = i;
        }
      });
    });
  },
};
</script>

<style>
  #main-maint-pc, .em-manutencao {
    background-color: #024873;
  }
</style>
