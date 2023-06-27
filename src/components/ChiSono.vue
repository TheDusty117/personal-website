<template>
  <section class="double-color">
    <div class="container pt-3">
      <div class="row">
        <div class="aside col-6">
          <img class="chisono pt-5" src="../../public/images/CHI SONO.png" alt="">
        </div>
      
        <div class="content col-6">
          <div class="d-flex flex-wrap justify-content-center">

            <img class="col-12 logopc pt-5" src="../../public/images/logo-pc.png" alt="">
              <p class="col-12 description">
                Gabriele Di Passio è un Jr. Front End Web Developer, Graphic Designer e 
                Tech enthusiast del Frusinate. Gabriele persegue la sua passione
                per il codice e per il design, cercando una continua unione dei due mondi.
                Inizia il suo percorso come Graphic Designer dal liceo, lavorando per
                vari studi grafici e come freelance, per poi fare esperienze in vari settori
                come Retail Sales Manager e operatore di Informatica sanitaria
                A Novembre 2022, intraprende il percorso di formazione con Boolean
                come Fullstack Web Developer inseguendo la sua passione per il codice.
              </p>
          </div>
        </div>
      
      </div>
    </div>
  </section>
</template>

<script>
  import '@fontsource-variable/jetbrains-mono'
  export default {
    
  }
</script>

<style lang="scss" scoped>
.double-color{
 background: linear-gradient(90deg, #FF9678 50%, #41436A 50%);
//   min-height: 1000px;
}

.row{
  // background: linear-gradient(
  //   to right,
  //   #41436A 0%,
  //   #41436A 50%,
  //   #FF9678 50%,
  //   #FF9678 100%,

  // );
  
}

.aside{
  // background-color: #FF9678;
  // width: 40%;
}

.content{
  // background-color: #41436A;
  min-height: 600px;
  // width: 60%;
  p{
    color: #FF9678;
    font-family: 'JetBrains Mono Variable', sans-serif; 
  }
  .description{
    padding-top: 62px;
    font-size: 18px;
  }
}



@media screen and (max-width: 850px) {


  .aside{
    width: 100%;
    background-color: #FF9678;
  }

  .content{
    width: 100%;
    background-color: #41436A;
  }
  
  .double-color{
 background: linear-gradient(180deg, #ff957800 40%, #41436a00 40%);

  }


}




.chisono{
  width: 80%;
}
.logopc{
  width:30%;
}

</style>