<template>
  <router-link :to="{ name: 'filter-entry', params: { nome: name } }">
    <div :class="[name,'dash-block']">
      <div class="row">
        <div class="col m8">
          <h2>Estado crítico (urgência)</h2>
          <p>Contagem: <span>{{ count }}</span></p>
        </div>
        <div class="col m4">
          <svgCriti/>
        </div>
      </div>
      <router-link v-if="count"
      :to="{ name: 'filter-entry', params: { nome: name } }"><p class="center">Ver</p></router-link>
    </div>
  </router-link>
</template>

<script>
import bd from '../firebaseinit';
import svgCriti from './images/svg/critical';

export default {
  name: 'critical',
  components: {
    svgCriti,
  },
  data() {
    return {
      count: null,
      name: 'estado-critico',
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas');
    docRef.get().then((docs) => {
      let i = 0;
      docs.forEach((doc) => {
        // eslint-disable-next-line eqeqeq
        if (doc.data().Estado == context.name) {
          // eslint-disable-next-line no-plusplus
          i++;
          context.count = i;
        }
      });
    });
  },
};
</script>

<style>
  .estado-critico {
    border-radius: 8px;
    background: #efeeee;
    box-shadow: 6px 6px 16px #cbcaca,
                -6px -6px 16px #ffffff;
    color: rgb(68, 68, 68);
    font-weight: 600;
    cursor: pointer;
  }
  .estado-critico h2 {
    font-weight: 600;
  }
  .estado-critico:hover #critical {
    fill: rgb(179, 17, 47);
    transition-duration: .5s;
  }
</style>
