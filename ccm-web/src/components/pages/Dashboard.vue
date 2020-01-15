<template>
  <div class="row">
    <sidebar/>
    <div class="col m9 s12 main-page" id="main-dashboard">
      <h1>CCM - Web Version <span>Evolved</span> <iconVer/></h1>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">Bem vindo(a)!</h2>
      </blockquote>
      <div id="quadros-row" class="row">
        <div class="col m4 s6 quadros"><all/></div>
        <div class="col m4 s6 quadros"><solut/></div>
        <div class="col m4 s6 quadros"><maint/></div>
        <div class="col m4 s6 quadros"><crit/></div>
        <div class="col m4 s6 quadros"><dam/></div>
        <div class="col m4 s6 quadros"><unused/></div>
      </div>
    </div>
  </div>
</template>

<script>
// import auth from './firebaseinit';
// importa os quadros
import all from '../quadros/all';
import crit from '../quadros/critical';
import dam from '../quadros/damaged';
import maint from '../quadros/maintence';
import unused from '../quadros/unusable';
import solut from '../quadros/solutioned';
import iconVer from '../svg-components/embryo-version';
import sidebar from '../Sidebar';

export default {
  name: 'dashboard',
  // inicia componentes externos
  components: {
    all,
    iconVer,
    crit,
    dam,
    maint,
    unused,
    sidebar,
    solut,
  },
};
</script>

<style>
  #main-dashboard h1{
    font-size: 32px;
  }
    #main-dashboard h1 span{
      background-color: red;
      padding: 2px;
      border-radius: 5px;
      color: white;
      font-size: 12px;
  }
  .quadros {
    position: relative;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 799px) {
    #main-dashboard h1 {
      font-size: 2rem;
    }
    .quadros {
      margin-bottom: 0;
    }
  }
</style>
