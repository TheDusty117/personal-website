<template>
  <section class="double-color">
    <div class="container pt-3">
      <div class="row">

        <div class="aside">
          <p class="p-blue">
            Dopo aver frequentato l’indirizzo di Grafica
del Liceo Artistico A. Giulio Bragaglia, inizia a
lavorare e fare esperienza come Graphic Designer, 
lavorando per vari studi Grafici, per poi maturare
esperienze nel mondo del Retail Sales Management e 
Informatica Sanitaria. Nel Novembre 2022 inizia
il suo percorso come Fullstack Web Developer con Boolean,
completato nel Giugno 2023.
          </p>

          <img class="montagne" src="../../public/images/MONTAGNE.png" alt="">

          <div class="separator"></div>
        </div>
      
        <div class="content">
          <div class="d-flex flex-wrap justify-content-center">

            <img class="esperienza" src="../../public/images/ESPERIENZA.png" alt="">
             
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



.aside{
  // background-color: #FF9678;
  width: 50%;
  .montagne{
    width: 100%;
  }
}

.content{
  // background-color: #41436A;
  
  min-height: 600px;
  width: 50%;
  p{
    color: #FF9678;
    font-family: 'JetBrains Mono Variable', sans-serif; 
  }
  .description{
    padding-top: 62px;
    font-size: 18px;
  }
}

.p-blue{
  color: #41436A;
  font-family: 'JetBrains Mono Variable', sans-serif; 
  font-size: 18px;
  font-weight: 600;
}

.chisono{
  width: 100%;
}
.esperienza{
  width:100%;
}

</style>