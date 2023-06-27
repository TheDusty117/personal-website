<template>
  <div class="hero">
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

.hero{
  background-image: url('../../public/images/HERO\ PROVAAA.png');
  min-height: 900px;
  // min-height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

@media screen and (max-width: 850px) {
  .hero{
    background-image: url('../../public/images/HERO SMARTPHONE.png');
  }


}


</style>