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
      <span class="center" v-if="err != ''">{{ err }}</span>
      <p v-if="err != ''">Entre em contato com um administrador do sistema.</p>
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
      err: '',
    };
  },
  methods: {
    async login() {
      const context = this;
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
        // Tratamento de erros
        const notExist = 'Error: There is no user record corresponding to this identifier. The user may have been deleted.';
        const invalidPass = 'Error: The password is invalid or the user does not have a password.';
        const connection = 'Error: A network error (such as timeout, interrupted connection or unreachable host) has occurred.';
        // eslint-disable-next-line eqeqeq
        if (e == connection) {
          const error = 'Erro: Ocorreu um erro de rede (como tempo limite, conexão interrompida ou host inacessível)';
          context.err = error;
        }
        // eslint-disable-next-line eqeqeq
        if (e == invalidPass) {
          const error = 'Erro: a senha é inválida.';
          context.err = error;
        }
        // eslint-disable-next-line eqeqeq
        if (e == notExist) {
          const error = 'Erro: não há registro de usuário correspondente a este email. O usuário pode ter sido excluído.';
          context.err = error;
        }
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
    transform: translateY(100px);
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
