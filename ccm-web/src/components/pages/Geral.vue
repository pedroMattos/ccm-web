<template>
  <div class="row">
    <sidebar/>
    <div class="main-page col m9" id="main-geral">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <h1>Gerenciador</h1>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">
        Aqui você pode adicionar usuários, e outras coisas que só adms podem fazer</h2>
      </blockquote>
      <div class="row container">
        <p @click.prevent="open"
        v-if="hide" id="title-expand-newuser-open">Adicionar Novo usuário +</p>
        <p @click.prevent="close"
        v-if="show" id="title-expand-newuser-close">Adicionar Novo usuário -</p>
        <registerUser/>
        <p v-if="hideR" id="title-expand-recsenha">Atualizar usuário +</p>
        <p v-if="showR" id="title-expand-recsenha">Atualizar usuário -</p>
        <!-- <update-user></update-user> -->
      </div>
    </div>
  </div>
</template>

<script>
import back from '../svg-components/back';
import auth from '../firebaseinit';
import sidebar from '../Sidebar';
import registerUser from '../forms/registerUser';
// import updateUser from '../forms/updateUser';

export default {
  name: 'geral',
  components: {
    back,
    sidebar,
    registerUser,
    // updateUser,
  },
  data() {
    return {
      show: false,
      hide: true,
      showR: false,
      hideR: true,
    };
  },
  mounted() {
    const docRef = auth.collection('Controller');
    docRef.get().then((doc) => {
      // eslint-disable-next-line no-shadow
      doc.forEach((doc) => {
        // eslint-disable-next-line eqeqeq
        if (doc.data().id == window.uid) {
          // eslint-disable-next-line eqeqeq
          if (doc.data().Nivel == 'User') {
            this.$router.push({ name: 'Home' });
          }
        }
      });
    });
  },
  methods: {
    open() {
      this.show = true;
      this.hide = false;
      const form = document.getElementById('main-form-register');
      form.classList.remove('closed');
    },
    openR() {
      this.showR = true;
      this.hideR = false;
      const form = document.getElementById('main-form-register');
      form.classList.remove('closed');
    },
    close() {
      this.show = false;
      this.hide = true;
      const form = document.getElementById('main-form-register');
      form.classList.add('closed');
    },
    closeR() {
      this.showR = false;
      this.hideR = true;
      const form = document.getElementById('main-form-register');
      form.classList.add('closed');
    },
  },
};
</script>

<style>
  #title-expand-newuser-open, #title-expand-newuser-close, #title-expand-recsenha {
    background: #efeeee;
    box-shadow: 2px 2px 8px #cbcaca, -2px -2px 8px #ffffff !important;
    border-radius: 5px;
    color: rgb(105, 105, 105);
    width: 100%;
    max-width: 200px;
    padding: 5px;
    margin-left: 20px;
    cursor: pointer;
    border-radius: 3px;
    display: block;
  }
  .closed {
    display: none;
  }
@media only screen and (max-width: 799px) {
  #title-expand-newuser-open, #title-expand-newuser-close {
    background-color: #024873;
    color: white;
    width: 100%;
    max-width: 170px;
    padding: 5px;
    margin-left: 20px;
    cursor: pointer;
    border-radius: 3px;
  }
  .closed {
    display: none;
  }
}
</style>
