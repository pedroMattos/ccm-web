<template>
  <div class="row" id="scanner">
    <sidebar/>
    <div class="col m9 s12 main-page">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">Funcionalidade em testes <br> <p>Qr Code Scanner</p></h2>
      </blockquote>
      <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream>
      <!-- <qrcode-drop-zone></qrcode-drop-zone> -->
      <!-- <qrcode-capture></qrcode-capture> -->
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
// import QrScanner from 'instascan';
import back from '../svg-components/back';
import sidebar from '../Sidebar';

export default {
  name: 'qrScan',
  components: {
    sidebar,
    back,
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture,
  },
  data() {
    return {
      content: null,
    };
  },
  methods: {
    onDecode(decodedString) {
      this.content = decodedString;
    },
  },
};
</script>

<style>
  #preview {
    border: solid 1px grey;
    border-radius: 8px;
    background-color: azure;
  }
</style>
