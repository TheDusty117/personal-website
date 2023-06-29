<template>
  <Hero></Hero>
  <ChiSono></ChiSono>
  <Esperienza></Esperienza>
  <Lavori></Lavori>
</template>

<script>
import Hero from "./Hero.vue";
import ChiSono from "./ChiSono.vue";
import Esperienza from "./Esperienza.vue";
import Lavori from "./Lavori.vue";

import Coloring from "./Coloring.vue";
export default {
  components: {
    Hero,
    ChiSono,
    Esperienza,
    Lavori,
  },
};
</script>

<style lang="scss" scoped></style>
