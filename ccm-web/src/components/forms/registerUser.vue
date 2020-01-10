<template>
  <form method="post" @submit.prevent="register()" class="z-depth-2" id="main-form-register">
    <div class="row">
      <div class="input-field col s12">
        <input v-model="email" id="email" type="email" class="validate">
        <label for="email">Email</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input v-model="password" id="password" type="password" class="validate">
        <label for="password">Senha</label>
      </div>
      <input type="submit" value="Entrar" class="btn col m12">
      <span class="center" v-if="err != ''">{{ err }}</span>
      <p v-if="err != ''">Entre em contato com um administrador do sistema.</p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'register',
};
</script>
