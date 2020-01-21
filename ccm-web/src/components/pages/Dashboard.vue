<template>
  <div class="row">
    <sidebar/>
    <div class="col m9 s12 main-page" id="main-dashboard">
      <h1>CCM - Web Version <span>Beta</span> <iconVer/></h1>
      <router-link :to="{ name: 'PatchNotes' }">
        <p id="to-release">Leia as notas de atualização <span>Novo!</span></p></router-link>
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
      <div class="row container">
        <!-- <router-link :to="{ name: 'PatchNotes' }"><patch/></router-link> -->
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
import patch from '../patchN';

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
    patch,
  },
};
</script>

<style>
  #news {
    background-color: green;
    color: white;
    padding: 2px;
    border-radius: 4px;
  }
  #ver {
    font-weight: bold;
  }
  #main-block-pt {
    background-color: bisque;
    height: 150px;
    width: 250px;
    border: solid grey 1px;
    border-radius: 8px;
  }
  #main-dashboard h1{
    font-size: 32px;
  }
  #main-dashboard h1 span{
    background-color: blue;
    padding: 2px;
    border-radius: 5px;
    color: white;
    font-size: 12px;
  }
  a #to-release{
    font-weight: 600;
    color: rgb(82, 82, 82);
    position: relative;
    /* overflow: hidden; */
    width: max-content;
  }
  a #to-release::after {
    content: '';
    position: absolute;
    bottom: -4px;
    height: 1px;
    background-color: rgba(82, 82, 82, 0.616);
    width: 0;
    transition-duration: .5s;
    left: 0;
  }
  a:hover #to-release::after {
    content: '';
    position: absolute;
    bottom: -4px;
    height: 1px;
    background-color: rgba(82, 82, 82, 0.616);
    width: 100%;
    transition-duration: .5s;
  }
  #to-release span {
    font-size: 12px;
    background-color: rgb(64, 184, 64);
    color: white;
    padding: 2px;
    border-radius: 4px;
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
  #app {
    min-height: 100vh;
    background-color: #efeeee;
  }
</style>
