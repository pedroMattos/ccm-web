<template>
  <router-link :to="{ name: 'filter-entry', params: { nome: name } }">
    <div :class="[name,'dash-block']">
      <div class="row">
        <div class="col m8">
          <h2>Em manutenção</h2>
          <p>Contagem: <span>{{ count }}</span></p>
        </div>
        <div class="col m4">
          <svgMain/>
        </div>
      </div>
      <router-link v-if="count"
      :to="{ name: 'filter-entry', params: { nome: name } }"><p class="center">Ver</p></router-link>
    </div>
  </router-link>
</template>

<script>
import bd from '../firebaseinit';
import svgMain from './images/svg/maintenance';

export default {
  name: 'maintence',
  components: {
    svgMain,
  },
  data() {
    return {
      count: null,
      name: 'em-manutencao',
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas');
    docRef.get().then((doc) => {
      let i = 0;
      doc.forEach((docs) => {
        // eslint-disable-next-line eqeqeq
        if (docs.data().Estado == context.name) {
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
  .em-manutencao {
    border-radius: 8px;
    background: #efeeee;
    box-shadow: 6px 6px 16px #cbcaca,
                -6px -6px 16px #ffffff;
    color: rgb(68, 68, 68);
    font-weight: 600;
    cursor: pointer;
  }
  .em-manutencao h2 {
    font-weight: 600;
  }
  .em-manutencao:hover #maint {
    fill: #024873;
    transition-duration: .5s;
  }
</style>
