<script setup>
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <Header />
  <router-view></router-view>
  <!-- <Main /> -->
  <Footer />
</template>

<style lang="scss">
@use "./style/general.scss" as *;

body {
  // background-color: rgb(107, 107, 107);
  background: linear-gradient(180deg, #ff9678 50%, #41436a 50%);

  scroll-behavior: smooth;
}
</style>
