<template>
  <div class="row" id="scanner">
    <sidebar/>
    <div class="col m9 s12 main-page">
      <video id="preview"></video>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
import QrScanner from 'instascan';
import sidebar from '../Sidebar';

export default {
  name: 'qrScan',
  components: {
    sidebar,
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
