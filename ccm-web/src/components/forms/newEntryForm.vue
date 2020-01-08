<template>
    <form method="POST" class="col s12">
      <div class="row">
        <div class="input-field col s6 m6">
          <input placeholder="Tombo" id="tombo" v-model="tombo" name="tombo" type="text">
          <input placeholder="Modelo" id="modelo" v-model="modelo" name="modelo" type="text">
          <textarea placeholder="Descreva o problema" id="issue" name="issue" v-model="issue"
          class="materialize-textarea"></textarea>
            <div class="input-field col s12">
          <select v-model="situation">
            <option value="no selected" disabled>Choose your option</option>
            <option value="maintence">Em manutenção</option>
            <option value="critial">Estado crítico</option>
            <option value="damaged">Inutilizado</option>
            <option value="unused">Sem dono</option>
            <option value="solutioned">Solucionado</option>
          </select>
          <label>Situação</label>
        </div>
          <div class="center">
            <button @click.prevent="qrCodeGenerator"
            class="btn waves-effect waves-light">Gerar Código</button>
          </div>
        </div>
        <div class="center col m6">
          <div v-if="url != ''" class="col s12 center">
            <blockquote>
              <p>Este é o código referente a essa entrada</p>
              <p>Realize a impressão do mesmo e coloque-o na máquina a que se refere</p>
              <p>Vai facilitar a sua vida, confie em mim! ;)</p>
            </blockquote>
            <img v-if="url != ''" :src="url" alt="teste">
          </div>
          <input v-if="url != ''" type="submit"
          value="Criar Entrada" class="btn waves-effect waves-light">
        </div>
      </div>
    </form>
</template>

<script>
import qrcode from '../QR-code-generator';

export default {
  name: 'form-new-entry',
  components: {
    qrcode,
  },
  data() {
    return {
      tombo: '',
      situation: '',
      modelo: '',
      issue: '',
      date: '',
      uid: '345234524',
      name: 'Pedro',
      url: '',
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
  methods: {
    qrCodeGenerator() {
      const context = this;
      const now = new Date();
      // eslint-disable-next-line no-template-curly-in-string
      const url = 'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=';
      const month = now.getMonth() + 1;
      // eslint-disable-next-line prefer-template
      const date = now.getDate() + '/' + month + '/' + now.getFullYear();
      // eslint-disable-next-line prefer-template
      const qr = url + context.tombo + ';' + context.modelo + ';' + context.issue + ';' + date + ';' + context.name;
      context.url = qr;
    // eslint-disable-next-line no-console
    },
  },
};
</script>
