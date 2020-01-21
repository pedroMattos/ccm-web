<template>
  <router-link :to="{ name: 'filter-entry', params: { nome: name } }">
    <div :class="[name, 'dash-block']">
      <div class="row">
        <h2 class="block-tt">Inutilizados</h2>
        <div class="col m8 s12">
          <p>Contagem: <span>{{ count }}</span></p>
        </div>
        <div class="col m4 s12 center">
          <svgDam/>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import bd from '../firebaseinit';
import svgDam from './images/svg/damaged';

export default {
  name: 'damaged',
  components: {
    svgDam,
  },
  data() {
    return {
      count: null,
      name: 'inutilizado',
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
  .inutilizado {
    color: #D9042B;
    border: solid rgba(217, 4, 43, 0.219) 1px;
  }
  .inutilizado:hover #inut {
    fill: #D9042B;
    transition-duration: .5s;
  }
  @media only screen and (max-width: 799px) {
    .inutilizado #inut {
      width: 30px;
      height: auto;
      margin: 6px auto;
    }
    .inutilizado {
      color: #D9042B;
      border: solid rgba(217, 4, 43, 0.219) 1px;
      border-radius: 0;
    }
  }
</style>
