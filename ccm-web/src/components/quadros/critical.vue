<template>
  <router-link :to="{ name: 'filter-entry', params: { nome: name } }">
    <div :class="[name,'dash-block']">
      <div class="row">
        <h2 class="block-tt">Estado crítico (urgência)</h2>
        <div class="col m8 s12">
          <p>Contagem: <span>{{ count }}</span></p>
        </div>
        <div class="col m4 s12 center">
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
  .estado-critico:hover #critical {
    fill: rgb(179, 17, 47);
    transition-duration: .5s;
  }
  @media only screen and (max-width: 799px) {
    .estado-critico #critical {
      width: 30px;
      height: auto;
      margin: 6px auto;
    }
    .estado-critico {
      border: solid rgba(217, 4, 43, 0.219) 1px;
      border-radius: 0;
    }
  }
</style>
