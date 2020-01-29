<template>
  <div class="row">
    <form action="" class="col s6" id="att-user">
      <div class="input-field col s12">
        <select v-model="choice">
          <option value="" disabled>Escolha</option>
          <option value="1">Atualizar senha</option>
          <option value="2">Desativar usuário</option>
          <option value="3">Promover usuário</option>
        </select>
        <label>Selecione uma opção</label>
      </div>
      <div v-if="choice == 1" class="the-choice">
        <div class="input-field col s12">
          <input placeholder="Digite o Uid do usuário" id="uid"
          v-model="uidUser" name="uid" type="text" class="validate">
          <label for="uid">UID</label>
        </div>
        <div class="input-field col s12">
          <input v-if="uidUser" placeholder="Digite a nova senha" id="pass"
          v-model="password" name="pass" type="password" class="validate">
          <label for="pass">Nova senha</label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import firebase admin para atualiza dados de um usuário
import admin from 'firebase-admin';
// import auth from '../firebaseinit';


export default {
  name: 'atualiza-user',
  data() {
    return {
      choice: null,
      uidUser: null,
      password: null,
    };
  },
  mounted() {
    // eslint-disable-next-line no-undef
    $(document).ready(() => { $('select').formSelect(); });
  },
  watch: {
    choice(val) {
      const context = this;
      // eslint-disable-next-line eqeqeq
      if (val == 1) {
        admin.auth().updateUser(context.uidUser, {
          password: context.password,
        })
          .then((userRecord) => {
            // eslint-disable-next-line no-alert
            alert(`Senha do usuário atualizada com sucesso! ${userRecord.toJSON()}`);
          })
          .catch((error) => {
            // eslint-disable-next-line no-alert
            alert(`Ocorreu um erro ao atualizar: ${error}`);
          });
      }
    },
  },
};
</script>

<style>

</style>
