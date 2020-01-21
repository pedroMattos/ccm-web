<template>
  <router-link :to="{ name: 'AllEntries' }">
    <div class="dash-block" id="main-all-pc">
      <div class="row">
        <h2 class="block-tt">Todos (já cadastrados)</h2>
        <div class="col m8 s12">
          <p>Contagem: <span>{{ count }}</span></p>
        </div>
        <div class="col m4 s12 center">
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
  .dash-block {
    border-radius: 8px;
    background: #efeeee;
    box-shadow: 6px 6px 13px #cbcaca,
                -6px -6px 13px #ffffff;
    color: rgb(68, 68, 68);
    font-weight: 600;
    cursor: pointer;
  }
  .dash-block h2 {
    font-weight: 600;
  }
  #main-all-pc:hover #selectall {
    fill: green;
    transition-duration: .5s;
  }
  .block-tt{
    margin-left: 10px !important;
  }
  @media only screen and (max-width: 799px) {
    .dash-block {
      box-shadow: none;
    }
    #main-all-pc #selectall {
      width: 30px;
      height: auto;
      margin: 6px auto;
    }
    #main-all-pc {
      border: solid rgba(0, 128, 0, 0.459) 1px;
      border-radius: 0;
    }
  }
</style>
