<template>
  <div>
    <section class="color">
      <div class="container">
        <div class="row">
          <div class="content col-12 row justify-content-center">
            <h2 class="proj-title">
              Whatsapp
              <font-awesome-icon icon="fa-brands fa-whatsapp" />
            </h2>
            <p class="col-12 description project-description">
              Replica di Whatsapp, strutturando il progetto con JavaScript,
              rendendo i vari contatti della rubrica automatizzati e
              interattivi, infatti i contatti risponderanno alle nostre risposte
              in chat!
            </p>
            <img
              class="visualize-img"
              src="../../public/images/whatsapp-proj.png"
              alt=""
              @click="showFullScreenImage"
            />
          </div>
        </div>
      </div>
    </section>
    <div
      v-if="showImageFullScreen"
      class="fullscreen-overlay"
      @click="closeFullScreenImage"
    >
      <img
        class="fullscreen-image"
        src="../../public/images/whatsapp-proj.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImageFullScreen: false,
    };
  },
  methods: {
    showFullScreenImage() {
      this.showImageFullScreen = true;
    },
    closeFullScreenImage() {
      this.showImageFullScreen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
//INIZIO CLICK ON IMAGE TO VISUALIZE
.visualize-img {
  cursor: pointer;
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: pointer;
}

.fullscreen-image {
  max-width: 100%;
  max-height: 100%;
}
//FINE CLICK ON IMAGE TO VISUALIZE
.color {
  // background: linear-gradient(90deg, #ff9678 50%, #41436a 50%);
  background-color: #41436a;
  //   min-height: 1000px;
  padding-top: 200px;
}
.aside {
  background-color: #ff9678;
  z-index: 4;
}
.content {
  img {
    width: 100%;
  }
  .proj-title {
    padding-bottom: 30px;
    color: #ff9678;
    font-family: "JetBrains Mono Variable", sans-serif;
    font-weight: 1000;
    font-size: 24px;
  }
  p {
    color: #41436a;
    font-family: "JetBrains Mono Variable", sans-serif;
    font-weight: 600;
    padding-bottom: 30px;
    font-size: 18px;
  }
  // background-color: #41436A;
  min-height: 600px;
  // width: 60%;
  p {
    color: #ff9678;
    font-family: "JetBrains Mono Variable", sans-serif;
  }
  .description {
    // padding-top: 62px;
    font-size: 18px;
  }
}
</style>
