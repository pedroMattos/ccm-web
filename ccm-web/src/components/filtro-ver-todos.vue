<template>
  <div class="row container" id="main-see-cats">
    <div v-for="item in names" :class="[item.class, 'center']" :key="item.class" id="loop">
      <router-link
      :to="{ name: 'filter-entry', params: { nome: item.class } }">
      <div><p>{{ item.name }}</p></div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filtro',
  data() {
    return {
      names: [
        { name: 'Em manutenção', class: 'em-manutencao' },
        { name: 'Estado crítico', class: 'estado-critico' },
        { name: 'Inutilizado', class: 'inutilizado' },
        { name: 'Sem dono', class: 'sem-dono' },
        { name: 'Solucionado', class: 'solucionada' },
      ],
    };
  },
};
</script>

<style>
  #main-see-cats {
    display: inline-flex;
    font-weight: 600;
  }
  #main-see-cats > div {
    width: 150px;
    margin: 0 10px;
    padding: 5px;
    border-radius: 2px;
    height: 36px;
    cursor: pointer;
  }
  #main-see-cats > div p {
    margin: 0;
  }
  #main-see-cats .inutilizado a {
    color: red;
  }
  #main-see-cats a {
    color: white;
  }
  @media only screen and (max-width: 799px) {
    #main-see-cats {
      display: block;
      font-weight: 600;
      margin: auto;
    }
    #main-see-cats > div {
      width: 100%;
      margin: 0;
    }
  }
</style>
