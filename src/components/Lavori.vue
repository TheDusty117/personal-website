<template>
  <section class="double-color">
    <div class="container">
      <div class="row">
        <div class="aside col-6">
          <img
            class="chisono pt-5"
            src="../../public/images/CHI SONO.png"
            alt=""
          />
        </div>

        <div class="content col-6">
          <div class="d-flex flex-wrap justify-content-center">
            <img
              class="col-12 logopc pt-5 elemento-animato"
              src="../../public/images/logo-pc.png"
              alt=""
            />
            <p class="col-12 description">
              Gabriele Di Passio è un Jr. Front End Web Developer, Graphic
              Designer e Tech enthusiast del Frusinate. Gabriele persegue la sua
              passione per il codice e per il design, cercando una continua
              unione dei due mondi. Inizia il suo percorso come Graphic Designer
              dal liceo, lavorando per vari studi grafici e come freelance, per
              poi fare esperienze in vari settori come Retail Sales Manager e
              operatore di Informatica sanitaria A Novembre 2022, intraprende il
              percorso di formazione con Boolean come Fullstack Web Developer
              inseguendo la sua passione per il codice.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.double-color {
  background: linear-gradient(90deg, #ff9678 50%, #41436a 50%);
  //   min-height: 1000px;
}

.aside {
  // background-color: #FF9678;
  // width: 40%;
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
.logopc {
  width: 30%;
}
</style>
