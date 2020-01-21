<template>
  <router-link :to="{ name: 'filter-entry', params: { nome: name } }">
    <div :class="[name, 'dash-block']" id="main-unu-pc">
      <div class="row">
        <h2 class="block-tt">Máquinas paradas (livres)</h2>
        <div class="col m8 s12">
          <p>Contagem: <span>{{ count }}</span></p>
        </div>
        <div class="col m4 s12 center">
          <svgLivre/>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import bd from '../firebaseinit';
import svgLivre from './images/svg/livre';

export default {
  name: 'unused',
  components: {
    svgLivre,
  },
  data() {
    return {
      count: null,
      name: 'sem-dono',
    };
  },
  created() {
    const context = this;
    const docRef = bd.collection('Máquinas');
    docRef.get().then((doc) => {
      let i = 0;
      // eslint-disable-next-line no-shadow
      doc.forEach((doc) => {
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
  .sem-dono:hover #livre {
    fill: rgb(80, 130, 173);
    transition-duration: .5s;
  }
  @media only screen and (max-width: 799px) {
    .sem-dono #livre {
      width: 30px;
      height: auto;
      margin: 6px auto;
    }
    .sem-dono {
      border: solid rgba(80, 129, 173, 0.521) 1px;
      border-radius: 0;
    }
  }
</style>
