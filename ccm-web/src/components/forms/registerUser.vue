<template>
  <form method="post" @submit.prevent="register()" class="col m6 tt" id="main-form-register">
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
      <p>Nivel</p>
      <p>
        <label>
          <input name="admin" value="Admin" v-model="nivel" type="radio" />
          <span>Administrador</span>
        </label>
      </p>
      <p>
        <label>
          <input name="user" value="User" v-model="nivel" type="radio" />
          <span>Usuário Padrão</span>
        </label>
      </p>
      <p>Permissões</p>
      <p>
        <label>
          <input name="master" value="Master" v-model="permiss" type="radio" />
          <span>Master</span>
        </label>
      </p>
      <p>
        <label>
          <input name="w/c" value="Write/Create" v-model="permiss" type="radio" />
          <span>Ler/Criar</span>
        </label>
      </p>
      <input type="submit" value="Criar usuário" class="btn col m12">
    </div>
  </form>
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
</style>
