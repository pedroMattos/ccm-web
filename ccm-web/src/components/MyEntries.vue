<template>
    <div class="main-page col m9" id="main-my-entry">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <h1>Minhas entradas</h1>
      <div class="main-page row">
        <myentry/>
      </div>
    </div>
</template>

<script>
import back from './svg-components/back';
import myentry from './quadros/myentry';

export default {
  name: 'my-entry',
  components: {
    back,
    myentry,
  },
};
</script>
