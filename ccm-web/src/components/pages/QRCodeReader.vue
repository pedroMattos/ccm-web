<template>
  <div class="row" id="scanner">
    <sidebar/>
    <div class="col m9 s12 main-page">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">Funcionalidade em testes <br> <p>Qr Code Scanner</p></h2>
      </blockquote>
      <div class="file-field input-field">
        <div class="btn">
          <span>QR Code</span>
          <QrcodeCapture @decode="onDecode"></QrcodeCapture>
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" placeholder="Toque para iniciar a câmera" type="text">
        </div>
      </div>
      <div style="margin: auto;" class="row container">
        <p id="decoded">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
import back from '../svg-components/back';
import sidebar from '../Sidebar';

export default {
  name: 'qrScan',
  props: {
    isReader: Boolean,
  },
  components: {
    sidebar,
    back,
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture,
  },

  data() {
    return {
      content: '',
      errorMessage: '',
    };
  },
  methods: {
    onDecode(content) {
      this.content = content;
    },
  },
};
</script>

<style>
  #decoded {
    font-size: 15px;
    font-weight: 600;
  }
  input[type=file] {
    background-color: aquamarine;
  }
</style>
