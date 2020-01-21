<template>
  <router-link :to="{ name: 'filter-entry', params: { nome: name } }">
    <div :class="[name,'dash-block']">
      <div class="row">
        <h2 class="block-tt">Em manutenção</h2>
        <div class="col m8 s12">
          <p>Contagem: <span>{{ count }}</span></p>
        </div>
        <div class="col m4 s12 center">
          <svgMain/>
        </div>
      </div>
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
  .em-manutencao:hover #maint {
    fill: #024873;
    transition-duration: .5s;
  }
  @media only screen and (max-width: 799px) {
    .em-manutencao #maint {
      width: 30px;
      height: auto;
      margin: 6px auto;
    }
    .em-manutencao {
      border: solid #0248737a 1px;
      border-radius: 0;
    }
  }
</style>
