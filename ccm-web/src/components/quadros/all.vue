<template>
    <div class="dash-block" id="main-all-pc">
      <h2>Todos (já cadastrados)</h2>
      <p>Contagem: <span>{{ count }}</span></p>
      <router-link v-if="count"
      :to="{ name: 'AllEntries' }"><p class="center">Ver</p></router-link>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'all',
  data() {
    return {
      count: null,
      name: 'all',
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas');
    docRef.get().then((doc) => {
      // eslint-disable-next-line eqeqeq
      if (doc.docs.length == 0) {
        context.count = null;
      } else {
        context.count = doc.docs.length;
      }
    });
  },
};
</script>

<style>
  #main-all-pc {
    background-color: green;
  }
</style>
