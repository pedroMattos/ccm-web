<template>
  <div class="row" id="main-see-cats">
    <div v-for="item in names" :key="item.class" id="loop">
      <div :class="[item.class]"><p class="white-text">{{ item.name }}</p></div>
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
        { name: 'Em manutenção', class: 'em-manutencao' },
      ],
    };
  },
};
</script>
