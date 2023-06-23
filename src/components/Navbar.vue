<template>
<div class="section">


  <div class="container">

    <div class="row justify-content-between align-items-center">

      <div class="col col-salmon">
        <ul>
          <li>logo</li>
        </ul>
      </div>

      <div class="col col-blu">
        <ul class="d-flex justify-content-between">
          <li>button</li>
          <li>button</li>
          <li>button</li>
          <li>button</li>
        </ul>
      </div>
    </div>
    
  </div>

</div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  
  .section{
    background-color: #FF9678;
    width: 100vw;
    position: fixed;
    .col-salmon{

    }
    .col-blu{
      background-color: #41436A;
      min-height: 75px;
    }

  }

</style>