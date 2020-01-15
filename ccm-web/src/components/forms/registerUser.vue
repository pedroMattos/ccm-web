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
          <label for="nome">Nome</label>
        </div>
        <div class="input-field col s12">
          <p>Nivel</p>
          <p>
            <label>
              <input name="adm" value="Admin" v-model="nivel" type="radio" />
              <span>Administrador</span>
            </label>
          </p>
          <p>
            <label>
              <input name="user" value="User" v-model="nivel" type="radio" />
              <span>Usuário Padrão</span>
            </label>
          </p>
        </div>
        <div class="input-field col s12">
          <p>Permissões</p>
          <p>
            <label>
              <input name="wrt/rd" value="Write/Read" v-model="permiss" type="radio" />
              <span>Ler/Criar</span>
            </label>
          </p>
          <p>
            <label>
              <input name="mstr" value="Master" v-model="permiss" type="radio" />
              <span>Todas</span>
            </label>
          </p>
        </div>
        <div class="center">
          <input type="submit" value="Criar usuário" class="btn col s12">
        </div>
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
