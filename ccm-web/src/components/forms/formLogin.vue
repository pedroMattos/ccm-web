<template>
  <form method="post" @submit.prevent="login()" class="z-depth-2" id="main-form-login">
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
    </div>
  </form>
</template>

<script>
import auth from '../firebaseinit';

export default {
  name: 'formLogin',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      // recupera o valor das variaveis
      const { email, password } = this;
      try {
        // realiza a autenticação
        const res = await auth.app.auth().signInWithEmailAndPassword(email, password);
        window.uid = res.user.uid;
        if (window.uid) {
          this.$router.push({ name: 'Home' });
        } else {
          this.$router.push({ name: 'login' });
        }
      } catch (e) {
        console.warn(e);
      }
    },
  },
};
</script>

<style>
  #main-form-login {
    width: 350px;
    background-color: white;
    padding: 10px;
    margin: 0 auto;
    transform: translateY(60%);
    border-radius: 8px;
  }
  input[type='submit'] {
    background-color: #023E73;
    border-radius: 5px;
  }
  input[type='submit']:hover {
    background-color: #024873;
  }
</style>
