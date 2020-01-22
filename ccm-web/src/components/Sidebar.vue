<template>
  <div class="col m3" ref="sidebar" id="main-sidebar">
    <div id="header-sidebar">
      <p>{{ name }}</p>
      <p>Uid:</p>
      <a id="uid" class="small-text">{{ email }}</a>
    </div>
    <p id="tap" class="waves-effect waves-light" @click.prevent="discovery"><span>?</span></p>
    <div id="separation"></div>
    <div id="body-sidebar">
      <ul>
        <router-link :to="{ name: 'AllEntries' }"><li>Todas as máquinas</li></router-link>
        <router-link :to="{ name: 'MyEntries' }"><li>Minhas entradas</li></router-link>
        <router-link :to="{ name: 'NewEntry' }"><li>Nova entrada</li></router-link>
        <router-link v-if="nivel == 'Admin'" :to="{ name: 'Admin' }">
          <li>Gerenciador</li></router-link>
        <li @click="logout()" id="logout">Logout
        <i class="material-icons tiny icon-sidebar">power_settings_new</i></li>
      </ul>
    </div>
  </div>
</template>
<script>
import auth from './firebaseinit';

export default {
  name: 'sidebar',
  data() {
    return {
      name: '',
      email: '',
      nivel: '',
      permiss: '',
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    $(document).ready(() => { $('.tap-target').tapTarget(); });
    const context = this;
    const docRef = auth.collection('Controller');
    docRef.get().then((doc) => {
      // eslint-disable-next-line no-shadow
      doc.forEach((doc) => {
        // eslint-disable-next-line eqeqeq
        if (doc.id == window.uid) {
          context.nivel = doc.data().Nivel;
          context.permiss = doc.data().Permiss;
          context.name = doc.data().Nome;
        }
      });
    });
    auth.app.auth().onAuthStateChanged((user) => {
      // se user.uid não estiver vazio, loga, senao nulo
      window.uid = user ? user.uid : null;
      if (window.uid) {
        context.email = auth.app.auth().currentUser.uid;
      }
    });
  },
  methods: {
    async logout() {
      await auth.app.auth().signOut();
      this.$router.push({ name: 'Login' });
      location.reload();
    },
    // init feature descovery
    discovery() {
      const card = document.createElement('div');
      const app = document.getElementById('app');
      let dist = document.getElementById('tap').offsetTop;
      dist -= 65;
      app.appendChild(card);
      card.setAttribute('id', 'feature-discover');
      card.setAttribute('style', `top:${dist}px`);
    },
  },
};
</script>

<style>
  .small-text {
    font-size: 12px;
  }
  #main-sidebar {
    background-color: #192d3a;
    max-width: 300px;
    height: 100vh;
    /* border-right: 1px solid #0D0D0D; */
    position: fixed;
    box-shadow: 3px 3px 21px #192d3a;
  }
  #header-sidebar {
    padding: 20px;
    color: white;
  }
  #separation {
    border-bottom: .5px solid rgba(255, 255, 255, 0.246);
    width: 250px;
    margin: 0 auto;
  }
  #body-sidebar {
    padding: 20px 0;
  }
  #body-sidebar ul li {
    color: white;
    font-weight: 500;
    border-bottom: .5px solid rgba(255, 255, 255, 0.246);
    padding-top: 22px;
    padding-left: 20px;
    transition-duration: .5s;
    height: 64px;
    cursor: pointer;
  }
  #body-sidebar ul {
    padding: 0;
  }
  #body-sidebar ul li:hover {
    background-color: #023E73;
    border-bottom: .5px solid transparent;
    transition-duration: .5s;
  }
  .icon-sidebar {
    transform: translateY(2px);
  }
  #logout {
    color: #D9042B !important;
  }
@media only screen and (max-width: 799px) {
  #main-sidebar {
    position: fixed;
    top: 0;
    transform: translateY(-100%);
    transition-duration:.5s;
    z-index: 99;
  }
  #header-sidebar {
    padding: 40px 20px 20px 20px;
  }
}
#tap{
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid white;
  width: 20px;
  height: 20px;
  text-align: center;
  color: white;
  transform: translate(230px, -55px);
}
#tap:hover {
  background-color: white;
  color: black;
}
#feature-discover {
  height: 50px;
  width: 50px;
  position: absolute;
  background-color: black;
  left: 275px;
  border-radius: 8px;
  box-shadow: 10px 10px 16px rgba(0, 0, 0, 0.541);
}
</style>
