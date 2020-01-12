<template>
  <div class="row">
    <form method="post" @submit.prevent="register()" class="col m6" id="main-form-register">
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
        <div class="input-field col s12">
          <input v-model="name" id="nome" type="text" class="validate">
          <label for="password">Nome</label>
        </div>
        <div class="input-field col s12">
          <select v-model="nivel">
            <option value="no selected" disabled>Escolha</option>
            <option value="Admin">Administrador</option>
            <option value="User">Usuário Padrão</option>
          </select>
          <label>Nivel</label>
        </div>
        <div class="input-field col s12">
          <select v-model="nivel">
            <option value="no selected" disabled>Escolha</option>
            <option value="Write/Create">Ler/Criar</option>
            <option value="Master">Todas</option>
          </select>
          <label>Permissões</label>
        </div>
        <input type="submit" value="Criar usuário" class="btn col m12">
      </div>
    </form>
    <blockquote v-if="nivel == 'Admin'" class="alert col m6 grey-text">
      <h3>Usuário Administrador:</h3>
      <p>Tem permissões de criar usuários</p>
      <p>Editar todas as entradas</p>
      <p>Promover usuários</p>
      <p>Excluir entradas</p>
      <p>Criar e ler entradas</p>
      <p>Geralmente tem acesso ao banco de dados</p>
    </blockquote>
    <blockquote v-if="nivel == 'User'" class="alert col m6 grey-text">
      <h3>Usuário Padrão:</h3>
      <p>Edita somente suas entradas</p>
      <p>Cria e lê entradas</p>
    </blockquote>
  </div>
</template>

<script>
import auth from '../firebaseinit';

export default {
  name: 'register',
  data() {
    return {
      password: '',
      email: '',
      uid: '',
      nivel: '',
      name: '',
      error: '',
      permiss: '',
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    $(document).ready(() => { $('select').formSelect(); });
  },
  methods: {
    register() {
      auth.app.auth().createUserWithEmailAndPassword(this.email, this.password).then((cred) => {
        const ref = auth.collection('Controller');
        const id = cred.user.uid;
        const payload = {
          Uid: cred.user.uid,
          Nome: this.name,
          Nivel: this.nivel,
          Permiss: this.permiss,
        };
        ref.doc(id).set(payload, (error) => {
          if (error) {
            this.error = error;
          } else {
            this.$router.push({ name: 'Login' });
            location.reload();
          }
        });
      });
    },
  },
};
</script>

<style>
  #main-form-register {
    padding: 20px;
  }
  .alert h3 {
    font-size: 24px;
  }
  .alert {
    border-left: 4px red solid;
  }
</style>
