<template>
  <div class="col md3" id="main-sidebar">
    <div id="header-sidebar">
      <p>{{ name }}</p>
      <p>{{ email }}</p>
    </div>
    <div id="separation"></div>
    <div id="body-sidebar">
      <ul>
        <li>Todas as máquinas</li>
        <li>Minhas entradas</li>
        <li>Nova entrada</li>
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
    padding: 20px;
  }
  #body-sidebar ul li {
    color: white;
    font-weight: 500;
  }
  #body-sidebar ul {
    padding: 0;
  }
</style>
