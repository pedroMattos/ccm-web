<template>
    <div class="main-page col m9" id="main-new-entry">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <h1>Nova entrada</h1>
      <newEntryForm/>
    </div>
</template>

<script>
import back from './svg-components/back';
import newEntryForm from './forms/newEntryForm';

export default {
  name: 'newEntry',
  components: {
    back,
    newEntryForm,
  },
};
</script>
