<template>
  <router-link :to="{ name: 'filter-entry', params: { nome: name } }">
    <div :class="[name,'dash-block']">
      <div class="row">
        <h2 class="block-tt">Solucionadas</h2>
        <div class="col m8 s12">
          <p>Contagem: <span>{{ count }}</span></p>
        </div>
        <div class="col m4 s12 center">
          <svgSolu/>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import bd from '../firebaseinit';
import svgSolu from './images/svg/solution';

export default {
  name: 'solutioned',
  components: {
    svgSolu,
  },
  data() {
    return {
      count: null,
      name: 'solucionada',
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
  .solucionada:hover #solu {
    fill: #009afabd;
    transition-duration: .5s;
  }
  @media only screen and (max-width: 799px) {
    .solucionada #solu {
      width: 30px;
      height: auto;
      margin: 6px auto;
    }
    .solucionada {
      border: solid #009afa70 1px;
      border-radius: 0;
    }
  }
</style>
