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
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
import QrScanner from 'instascan';
import back from '../svg-components/back';
import sidebar from '../Sidebar';

export default {
  name: 'qrScan',
  components: {
    sidebar,
    back,
  },
  data() {
    return {
      content: null,
    };
  },
  created() {
    const context = this;
    // instancia a classe
    const scan = new QrScanner.Scanner(
      {
        video: document.getElementById('preview'),
      },
    );
    // listenner do scan
    scan.addListener('scan', (content) => {
      context.content = content;
    });
    // verifica se existe camera
    QrScanner.Camera.getCameras().then((device) => {
      // se tiver mais de 0 cameras
      if (device.length > 0) {
        // inicia a primeira
        scan.start(device[0]);
      } else {
        context.content = 'Nenhuma câmera localizada no dispositivo!';
      }
    });
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
