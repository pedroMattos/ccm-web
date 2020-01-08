<template>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Tombo" id="tombo" v-model="tombo" name="tombo" type="text">
        </div>
      </div>
    </form>
</template>

<script>
export default {
  name: 'form-new-entry',
  data() {
    return {
      tombo: '',
    };
  },
};
</script>
