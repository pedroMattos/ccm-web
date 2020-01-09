<template>
    <div class="dash-block" id="main-all-pc">
      <h2>Todos (já cadastrados)</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <p class="center">Ver</p>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'all',
  data() {
    return {
      count: '',
      name: 'all',
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas');
    docRef.get().then((doc) => {
      context.count = doc.docs.length;
    });
  },
};
</script>

<style>
  #main-all-pc {
    background-color: green;
  }
</style>
