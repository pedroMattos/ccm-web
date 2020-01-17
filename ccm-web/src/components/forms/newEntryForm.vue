<template>
    <form method="POST" @submit.prevent="submit()" class="col s12">
      <div class="row">
        <div class="input-field col s12 m6">
          <input placeholder="Tombo" id="tombo" v-model="tombo" name="tombo" type="text">
          <input placeholder="Modelo" id="modelo" v-model="modelo" name="modelo" type="text">
          <textarea placeholder="Descreva o problema" id="issue" name="issue" v-model="issue"
          class="materialize-textarea"></textarea>
          <div class="input-field col s12">
            <select v-model="details">
              <option value="no selected" disabled>Escolha</option>
              <option value="Aguardando Peça">Aguardando Peça</option>
              <option value="Aguardando Assistencia">Aguardando Assistencia</option>
              <option value="Sala de Manutenção">Sala de Manutenção</option>
              <option value="Sem Peça para reposição">Sem Peça para reposição</option>
              <option value="Movimentação de setor/maquina">Movimentação de setor/maquina</option>
              <option value="Troca de Maquina">Troca de Maquina</option>
              <option value="Retirada de maquina">Retirada de maquina</option>
            </select>
            <label>Situação</label>
          </div>
          <input placeholder="Dono" id="dono" v-model="owner" name="dono" type="text">
          <div class="input-field col s12">
            <select v-model="situation">
              <option value="no selected" disabled>Escolha</option>
              <option value="em-manutencao">Em manutenção</option>
              <option value="estado-critico">Estado crítico</option>
              <option value="inutilizado">Inutilizado</option>
              <option value="sem-dono">Sem dono</option>
              <option value="solucionada">Solucionado</option>
            </select>
            <label>Estado</label>
          </div>
          <div class="center">
            <button type="button" @click.prevent="qrCodeGenerator"
            :class="[disabled, 'btn', 'waves-effect', 'waves-light']">Gerar Código</button>
          </div>
        </div>
        <div class="center col m6">
          <div v-if="url" class="col s12 center">
            <blockquote>
              <p>Este é o código referente a essa entrada</p>
              <p>Realize a impressão do mesmo e coloque-o na máquina a que se refere</p>
              <p>Vai facilitar a sua vida, confie em mim! ;)</p>
            </blockquote>
            <img v-if="url" :src="url" alt="teste">
          </div>
          <input v-if="url" type="submit"
          value="Criar Entrada" class="btn waves-effect waves-light">
        </div>
      </div>
    </form>
</template>

<script>
import bd from '../firebaseinit';

export default {
  name: 'form-new-entry',
  data() {
    return {
      tombo: null,
      situation: null,
      modelo: null,
      issue: null,
      date: null,
      details: null,
      owner: null,
      url: null,
      error: null,
      disabled: 'disabled',
    };
  },
  created() {
    // Função inicia o select
    function select() {
      // eslint-disable-next-line block-spacing
      // eslint-disable-next-line prefer-arrow-callback
      // eslint-disable-next-line no-undef
      $(document).ready(() => { $('select').formSelect(); });
    }
    select();
  },
  watch: {
    situation(val) {
      const context = this;
      function removeDisabled() {
        if (val) {
          context.disabled = null;
        }
      }
      removeDisabled();
    },
  },
  methods: {
    qrCodeGenerator() {
      /* eslint-disable prefer-template */
      const context = this;
      const now = new Date();
      const uid = bd.app.auth().currentUser.uid;
      const email = bd.app.auth().currentUser.email;
      // eslint-disable-next-line no-template-curly-in-string
      const url = 'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=';
      const month = now.getMonth() + 1;
      const date = now.getDate() + '/' + month + '/' + now.getFullYear();
      context.date = date;
      const tombo = 'Tombo:' + context.tombo;
      const modelo = 'Modelo:' + context.modelo;
      const Uid = 'Uid:' + uid;
      const issue = 'Problema:' + context.issue;
      const owner = 'Dono:' + context.owner;
      const details = 'Detalhes:' + context.details;
      const qr = url + tombo + ';' + modelo + ';' + issue + ';' + date + ';' + email + ';' + Uid + ';' + owner + ';' + details;
      context.url = qr;
    },
    submit() {
      const context = this;
      const ref = bd.collection('Máquinas');
      const id = context.tombo;

      const payload = {
        Data: context.date,
        Detalhes: context.details,
        Dono: context.owner,
        Estado: context.situation,
        Modelo: context.modelo,
        Problema: context.issue,
        Responsável: bd.app.auth().currentUser.email,
        Tombo: context.tombo,
        Uid: bd.app.auth().currentUser.uid,
        QrCode: context.url,
      };
      ref.doc(id).set(payload).then(() => {
        // eslint-disable-next-line no-alert
        alert('Entrada criada!');
        context.$router.push({ name: 'Home' });
      }).catch((error) => {
        // eslint-disable-next-line no-alert
        alert('Houve um erro ao processar o envio: ' + error);
      });
    },
  },
};
</script>
