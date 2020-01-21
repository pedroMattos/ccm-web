<template>
  <router-link :to="{ name: 'AllEntries' }">
    <div class="dash-block" id="main-all-pc">
      <div class="row">
        <div class="col m8">
          <h2>Todos (já cadastrados)</h2>
          <p>Contagem: <span>{{ count }}</span></p>
        </div>
        <div class="col m4">
          <svgAll/>
        </div>
      </div>
      <router-link v-if="count"
      :to="{ name: 'AllEntries' }"><p class="center">Ver</p></router-link>
    </div>
  </router-link>
</template>

<script>
import bd from '../firebaseinit';
import svgAll from './images/svg/selectall';

export default {
  name: 'all',
  components: {
    svgAll,
  },
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
    border-radius: 8px;
    background: #efeeee;
    box-shadow: 6px 6px 16px #cbcaca,
                -6px -6px 16px #ffffff;
    color: rgb(68, 68, 68);
    font-weight: 600;
    cursor: pointer;
  }
  #main-all-pc h2 {
    font-weight: 600;
  }
  #main-all-pc:hover #selectall {
    fill: green;
    transition-duration: .5s;
  }
</style>
