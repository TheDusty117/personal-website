<template>
<div class="container">

  <div class="wraper">
    <div class="div-1">
      <div class="content">
        <h1>ciao</h1>
      </div>
    </div>
    <div class="div-2">
      <div class="content">
        <h1>ciao</h1>
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
.wraper{
  width: 100%;
  height: 330px;
  background-color: #000;
  display: flex;
}

.div-1{
  width: calc( 50% - 30px) ;
  height: 100%;
  background-color: #FF9678;
}

.div-2{
  width: calc( 50% + 30px );
  height: 100%;
  background-color: #17274c;
  border-left: 80px solid #FF9678;
  border-top: 330px solid transparent;
  box-sizing: border-box;
}

.content{
  color: white;
  font-size: 16px;
  padding: 15px;
}
</style>