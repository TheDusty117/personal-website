<template>
  <section class="double-color">
    <div class="container">
      <div class="row">
        <div class="aside col-6">
          <img
            class="chisono pt-5"
            src="../../public/images/lavori-title-blu.png"
            alt=""
          />
        </div>

        <div class="content col-6 forge-div">
          <div class="d-flex flex-wrap justify-content-center">
            <img class="hammer" src="../../public/images/hammer.png" alt="" />
            <img
              class="anvil"
              src="../../public/images/anvil-rose.png"
              alt=""
            />

            <p class="col-12 description">
              Questa sezione e' uno showroom di tutti i lavori fatti
              nell'esperienza di Gabriele sin dal primo giorno di formazione da
              sviluppatore Web. Qui troverai senza filtri i lavori fatti, sia
              nel bene che nel male!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Campominato from "./Campominato.vue";

export default {
  components: {
    Campominato,
  },
};
</script>

<style lang="scss" scoped>
.double-color {
  background: linear-gradient(90deg, #ff9678 50%, #41436a 50%);
  //   min-height: 1000px;
}
.aside {
  background-color: #ff9678;
  // width: 40%;
  z-index: 4;
}
.content {
  // background-color: #41436A;
  min-height: 600px;
  // width: 60%;
  p {
    color: #ff9678;
    font-family: "JetBrains Mono Variable", sans-serif;
  }
  .description {
    padding-top: 62px;
    font-size: 18px;
  }
}
.elemento-animato {
  animation-name: ingrandisci-riduci;
  animation-duration: 7s; /* Durata totale dell'animazione */
  animation-timing-function: ease-in-out; /* Funzione di temporizzazione per rendere l'animazione fluida */
  animation-iteration-count: infinite; /* Ripeti l'animazione all'infinito, puoi modificare o rimuovere questa riga se necessario */
}

@keyframes ingrandisci-riduci {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

@media screen and (max-width: 850px) {
  .aside {
    width: 100%;
    background-color: #ff9678;
  }

  .content {
    width: 100%;
    background-color: #41436a;
  }

  .double-color {
    background: linear-gradient(180deg, #ff957800 40%, #41436a00 40%);
  }
}

.chisono {
  width: 80%;
}

.forge-div {
  position: relative;
}
.hammer {
  width: 25%;
  position: absolute;
  bottom: 405px;
  left: 45%;

  animation: hammering 2.5s linear infinite;
}

.anvil {
  width: 30%;
  position: relative;
  padding-top: 180px;
}

@keyframes hammering {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

//SEZIONE ESTETICA DEI LAVORI

.project {
}
</style>
