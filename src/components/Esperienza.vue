<template>
  <section class="double-color">
    <div class="container">
      <div class="row">
        <div class="aside">
          <p class="p-blue">
            Dopo aver frequentato l’indirizzo di Grafica del Liceo Artistico A.
            Giulio Bragaglia, inizia a lavorare e fare esperienza come Graphic
            Designer, lavorando per vari studi Grafici, per poi maturare
            esperienze nel mondo del Retail Sales Management e Informatica
            Sanitaria. Nel Novembre 2022 inizia il suo percorso come Fullstack
            Web Developer con Boolean, completato nel Giugno 2023.
          </p>

          <!-- <img class="montagne" src="../../public/images/MONTAGNE.png" alt="" /> -->
          <img
            class="montagne"
            src="../../public/images/only-mountains.png"
            alt=""
          />
          <img class="sole" src="../../public/images/only-sun.png" alt="" />

          <div class="separator"></div>
        </div>

        <div class="content">
          <div class="d-flex flex-wrap justify-content-center">
            <img
              class="esperienza"
              src="../../public/images/experience-rose.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "@fontsource-variable/jetbrains-mono";
export default {};
</script>

<style lang="scss" scoped>
.double-color {
  background: linear-gradient(90deg, #ff9678 50%, #41436a 50%);
  //   min-height: 1000px;
}

.aside {
  position: relative;
  // background-color: #FF9678;
  width: 50%;
  .montagne {
    width: 100%;
    left: 0px;
    bottom: 0px;
    position: absolute;
    z-index: 2;
  }
  .sole {
    width: 60%;
    position: absolute;
    bottom: -60px;
    left: 20%;
  }
}

.sole {
  animation: circularMovement 10s infinite linear;
}

@keyframes circularMovement {
  0% {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
}

.content {
  // background-color: #41436A;
  z-index: 2;
  min-height: 600px;
  width: 50%;
  p {
    color: #ff9678;
    font-family: "JetBrains Mono Variable", sans-serif;
  }
  .description {
    padding-top: 62px;
    font-size: 18px;
  }
}

.p-blue {
  color: #41436a;
  font-family: "JetBrains Mono Variable", sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.chisono {
  width: 100%;
}
.esperienza {
  width: 100%;
}

@media screen and (max-width: 850px) {
  .aside {
    width: 100%;
    background-color: #ff9678;
    padding-bottom: 300px;
  }

  .content {
    width: 100%;
    background-color: #41436a;
  }

  .double-color {
    background: linear-gradient(180deg, #ff957800 40%, #41436a00 40%);
  }
}
</style>
