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
    /* width: 150px; */
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
  #main-see-cats .em-manutencao {
    border: #0248737a solid 1px;
    background-color: #0248737a;
  }
  #main-see-cats .sem-dono {
    border: solid rgba(80, 129, 173, 0.521) 1px;
    background-color: rgba(80, 129, 173, 0.521);
  }
  #main-see-cats .solucionada {
    border: solid #009afabd 1px;
    background-color: #009afabd;
  }
  #main-see-cats .inutilizado {
    border: solid rgba(247, 72, 72, 0.411) 1px;
  }
  #main-see-cats .estado-critico {
    border: 1px rgb(179, 17, 47) solid;
    background-color: rgb(179, 17, 47);
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
