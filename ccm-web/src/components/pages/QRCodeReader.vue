<template>
  <div class="row" id="scanner">
    <sidebar/>
    <div class="col m9 s12 main-page">
      <router-link :to="{ name: 'Home' }"><back/></router-link>
      <blockquote class="tip">
        <h2 class="grey-text lighten-2"
        id="sub-t-page">Funcionalidade em testes <br> <p>Qr Code Scanner</p></h2>
      </blockquote>
      <video id="preview"></video>
      <!-- <qrcode-drop-zone></qrcode-drop-zone> -->
      <QrcodeCapture @decode="onDecode"></QrcodeCapture>
      <p>{{ content }}</p>
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
// import adapter from 'webrtc-adapter';
// import jsQR from 'jsqr';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
import QrScanner from 'instascan';
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
      content: '',
      errorMessage: '',
    };
  },
  mounted() {
    const context = this;
    function qrscan() {
      const mediaStream = new MediaStream();
      const video = document.getElementById('preview');
      video.srcObject = mediaStream;
      // eslint-disable-next-line prefer-const
      let scanner = new QrScanner.Scanner({ video });
      // console.log(scanner);
      scanner.addListener('scan', (content) => {
        context.content = content;
      });
      QrScanner.Camera.getCameras().then((cameras) => {
        if (cameras.length > 0) {
          scanner.start(cameras[1]);
        } else {
          context.errorMessage = 'Nenhuma câmera encontrada';
        }
      }).catch((e) => {
        context.errorMessage = `Ocorreu um erro: ${e}`;
      });
    }
    qrscan();
  },
  methods: {
    onDecode(content) {
      this.content = content;
    },
  },
};
</script>

<style>
  video {
    max-height: 255px;
  }
</style>
