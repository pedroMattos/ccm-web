<template>
    <div class="blocks">
      <div v-for="item in block" :key="item.tombo"
      :class="[item.situation, 'dash-block', 'col', 'm4', 's12', 'entry']"  >
        <h2>{{ item.modelo }}</h2>
        <div class="row">
          <div class="col m9">
            <p>Tombo: <span>{{ item.tombo }}</span></p>
            <p>Estado: <span>{{ item.situation }}</span></p>
            <p>Problema: {{ item.issue }}</p>
            <p>Situação: {{ item.details }}</p>
            <p>Data de entrada: {{ item.date }}</p>
            <p>Responsavel: {{ item.name }}</p>
            <p>Dono: {{ item.owner }}</p>
          </div>
          <div class="col m3">
            <a target="_blank" :href="item.url">
              <img :src="item.url" width="50px" alt="qrcode">
            </a>
            <p class="edit" v-if="item.Editado">Editado:<br>{{ item.Editado }}</p>
          </div>
        </div>
        <p @click.prevent="openEdit(item.tombo, item.modelo, item.situation, item.details)"
        data-target="modal1" class="center modal-trigger">Atualizar</p>
      </div>
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Editar Entrada para {{ modelo }}</h4>
          <blockquote>
            <p>Tombo: {{ tombo }}</p>
            <p>Mudar Estado: {{ edit.Estado }}</p>
            <p>Mudar Situação: {{ edit.Detalhes }}</p>
          </blockquote>
          <form action="" id="edit-form">
            <div class="input-field col s12">
              <select v-model="edit.Detalhes">
                <option value="no selected" disabled>Escolha</option>
                <option value="Aguardando Peça">Aguardando Peça</option>
                <option value="Aguardando Assistencia">Aguardando Assistencia</option>
                <option value="Sem Peça para reposição">Sem Peça para reposição</option>
                <option value="Troca de Maquina">Troca de Maquina</option>
                <option value="Retirada de maquina">Retirada de maquina</option>
                <option value="Solucionado">Solucionado</option>
              </select>
              <label>Situação</label>
            </div>
            <div class="input-field col s12">
              <select v-model="edit.Estado">
                <option value="no selected" disabled>Escolha</option>
                <option value="em-manutencao">Em manutenção</option>
                <option value="estado-critico">Estado crítico</option>
                <option value="inutilizado">Inutilizado</option>
                <option value="sem-dono">Sem dono</option>
                <option value="solucionada">Solucionado</option>
              </select>
              <label>Estado</label>
            </div>
          </form>
        </div>
        <div v-if="show == true" class="input-field col s8">
          <p class="red-text"><strong>Digite seu email para continuar**</strong></p>
          <input placeholder="email"
          class="left" id="email" v-model="email" name="pss" type="email">
          <p @click.prevent="removeItem()"
          class="blue white-text waves-effect waves-green btn-flat">Ok!</p>
        </div>
        <div class="modal-footer col s12">
          <p v-if="nivel == 'Admin'" @click.prevent="toRemove()"
          class="waves-effect waves-green btn-flat white red-text">Excluir</p>
          <p @click.prevent="updateItem()"
          class="modal-close waves-effect waves-green btn-flat green white-text">Salvar</p>
          <a href="#!" id="fechar"
          class="modal-close waves-effect waves-green btn-flat red white-text">Cancelar</a>
        </div>
      </div>
    </div>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'myentry',
  data() {
    return {
      block: [],
      tombo: '',
      modelo: null,
      nivel: null,
      email: null,
      show: false,
      edit: {
        Estado: null,
        Detalhes: null,
        Editado: null,
        Edit_por: null,
      },
      activeItem: null,
    };
  },
  created() {
    const context = this;
    // Init modal
    // eslint-disable-next-line no-undef
    $(document).ready(() => { $('.modal').modal(); });
    // eslint-disable-next-line no-undef
    $(document).ready(() => { $('select').formSelect(); });
    const docRef = bd.collection('Máquinas').where('Uid', '==', window.uid);
    docRef.get().then((doc) => {
      // eslint-disable-next-line no-shadow
      doc.forEach((doc) => {
        const data = {
          uid: doc.data().Uid,
          tombo: doc.data().Tombo,
          details: doc.data().Detalhes,
          date: doc.data().Data,
          modelo: doc.data().Modelo,
          name: doc.data().Responsável,
          situation: doc.data().Estado,
          owner: doc.data().Dono,
          issue: doc.data().Problema,
          url: doc.data().QrCode,
          resp: doc.data().Edit_por,
          Editado: doc.data().Editado,
        };
        context.tombo = doc.data().Tombo;
        context.block.push(data);
      });
    });
    // permiss query
    const ref = bd.collection('Controller');
    ref.get().then((doc) => {
      // eslint-disable-next-line no-shadow
      doc.forEach((doc) => {
        // eslint-disable-next-line eqeqeq
        if (doc.id == window.uid) {
          context.nivel = doc.data().Nivel;
        }
      });
    });
  },
  methods: {
    updateItem() {
      bd.collection('Máquinas').doc(this.activeItem).update(this.edit,
      ).then(() => {
        // eslint-disable-next-line no-alert
        alert('Atualizado com sucesso!');
      })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          alert(error);
        });
    },
    openEdit(tombo, modelo, estado, situacao) {
      const now = new Date();
      this.activeItem = tombo;
      this.modelo = modelo;
      this.edit.Estado = estado;
      this.edit.Detalhes = situacao;
      const month = now.getMonth() + 1;
      // eslint-disable-next-line prefer-template
      const date = now.getDate() + '/' + month + '/' + now.getFullYear();
      this.edit.Editado = date;
      this.edit.Edit_por = bd.app.auth().currentUser.email;
    },
    removeItem() {
      // eslint-disable-next-line eqeqeq
      if (bd.app.auth().currentUser.email == this.email) {
        bd.collection('Máquinas').doc(this.activeItem).delete().then(() => {
          document.getElementById('fechar').click();
          // eslint-disable-next-line no-alert
          alert('Entrada removida do histórico');
        })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Error removing document: ', error);
          });
      } else {
        document.getElementById('fechar').click();
        // eslint-disable-next-line no-alert
        alert('E-mail incorreto!');
      }
    },
    toRemove() {
      this.show = true;
    },
  },
};
</script>

<style>
  .blocks > div {
    height: 100%;
    margin: 10px;
  }
  .blocks .entry {
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
