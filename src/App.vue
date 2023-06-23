<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
  <Header/>
  <Main/>
  <Footer/>

</template>

<style lang="scss">

@use './style/general.scss' as *;

body{
  background-color: rgb(107, 107, 107);
  scroll-behavior: smooth;
}



</style>