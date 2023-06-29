<template>
  <div class="hero">
    <img class="onde" src="../../public/images/onde-blu.png" alt="" />
    <!-- <img class="onde2" src="../../public/images/onde-blu.png" alt=""> -->
    <img class="onde3" src="../../public/images/onde-blu.png" alt="" />

    <img class="onderosa1" src="../../public/images/onde-rosa.png" alt="" />
    <!-- <img class="onderosa2" src="../../public/images/onde-rosa.png" alt=""> -->
    <img class="onderosa3" src="../../public/images/onde-rosa.png" alt="" />

    <img class="ondered" src="../../public//images/onde-red.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("../../public/images/HERO\ PROVAAA.png");
  min-height: 900px;
  // min-height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

.onde {
  width: 300px;
  position: absolute;
  top: 70px;
  left: 5%;
}

.onde2 {
  width: 300px;
  position: absolute;
  top: 70px;
  left: 700px;
}

.onde3 {
  width: 300px;
  position: absolute;
  top: 500px;
  left: 10%;
}

.onderosa1 {
  width: 300px;
  position: absolute;
  top: 70px;
  right: 8%;
}

.onderosa2 {
  width: 300px;
  position: absolute;
  top: 70px;
  right: 700px;
}

.onderosa3 {
  width: 300px;
  position: absolute;
  top: 500px;
  right: 10%;
}

.ondered {
  width: 200px;
  position: absolute;
  bottom: 30%;
  left: 44%;
}

@media screen and (min-width: 2050px) {
  .ondered {
    bottom: 40%;
  }
}

@media screen and (max-width: 550px) {
  .hero {
    background-image: url("../../public/images/HERO SMARTPHONE.png");
  }

  .onde {
    display: none;
  }

  .onderosa1 {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .hero {
    background-image: url("../../public/images/HERO SMARTPHONE.png");
  }
}

@media screen and (max-width: 1300px) {
  .hero {
    background-image: url("../../public/images/HERO SMARTPHONE.png");
  }

  .onde {
    width: 300px;
    position: absolute;
    top: 120px;
    left: 30%;
  }

  .onde2 {
    width: 300px;
    position: absolute;
    top: 70px;
    left: 700px;
    display: none;
  }

  .onde3 {
    width: 300px;
    position: absolute;
    top: 500px;
    left: 400px;
    display: none;
  }

  .onderosa1 {
    width: 300px;
    position: absolute;
    top: 650px;
    left: 30%;
  }

  .onderosa2 {
    width: 300px;
    position: absolute;
    top: 70px;
    right: 700px;
    display: none;
  }

  .onderosa3 {
    width: 300px;
    position: absolute;
    top: 500px;
    right: 400px;
    display: none;
  }
}

@media screen and (max-width: 1300px) {
  .ondered {
    display: none;
  }
}

.onde,
.onde2,
.onde3,
.onderosa1,
.onderosa2,
.onderosa3 {
  animation-name: spostamento;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes spostamento {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}

.ondered {
  animation-name: spostamento2;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes spostamento2 {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
