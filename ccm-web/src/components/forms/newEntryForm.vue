<template>
    <form method="POST" class="col s12">
      <div class="row">
        <div class="input-field col s6 m">
          <input placeholder="Tombo" id="tombo" v-model="tombo" name="tombo" type="text">
          <input placeholder="Modelo" id="modelo" v-model="modelo" name="modelo" type="text">
          <textarea placeholder="Descreva o problema" id="issue" name="issue" v-model="issue"
          class="materialize-textarea"></textarea>
          <input type="submit" value="Adicionar" class="btn waves-effect waves-light">
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
      modelo: '',
      issue: '',
    };
  },
};
</script>
