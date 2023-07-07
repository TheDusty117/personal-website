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
              interattivi, infatti i contatti risponderanno diversi secondi alle
              nostre risposte in chat!
            </p>
            <img src="../../public/images/whatsapp-proj.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
