<template>
  <Hero></Hero>
  <ChiSono></ChiSono>
  <Esperienza></Esperienza>
  <Lavori></Lavori>
  <Projects></Projects>
</template>

<script>
import Hero from "./Hero.vue";
import ChiSono from "./ChiSono.vue";
import Esperienza from "./Esperienza.vue";
import Lavori from "./Lavori.vue";
import Projects from "./Projects.vue";

import Coloring from "./Coloring.vue";
export default {
  components: {
    Hero,
    ChiSono,
    Esperienza,
    Lavori,
    Projects,
  },
};
</script>

<style lang="scss" scoped></style>
