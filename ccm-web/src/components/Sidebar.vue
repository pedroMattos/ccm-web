<template>
  <div class="col md3" id="main-sidebar">
    <div id="header-sidebar">
      <p>{{ name }}</p>
      <p>{{ email }}</p>
    </div>
    <div id="separation"></div>
    <div id="body-sidebar">
      <ul>
        <router-link :to="{ name: 'AllEntries' }"><li>Todas as máquinas</li></router-link>
        <router-link :to="{ name: 'MyEntries' }"><li>Minhas entradas</li></router-link>
        <router-link :to="{ name: 'NewEntry' }"><li>Nova entrada</li></router-link>
        <li id="logout">Logout
        <i class="material-icons tiny icon-sidebar">power_settings_new</i></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  data() {
    return {
      name: 'teste',
      email: 'teste@gmail.com',
    };
  },
};
</script>

<style>
  #main-sidebar {
    background-color: #024873;
    max-width: 300px;
    height: 100vh;
    border-right: 1px solid #0D0D0D;
    position: fixed;
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
</style>
