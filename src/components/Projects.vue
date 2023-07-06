<template>
  <div>
    <Food4You />
    <Campominato />
    <!-- <Carosello /> -->
    <Comics />
    <Cargo />
    <Discord />
    <Spotify />
    <Netflix />
    <Whatsapp />
    <Freelancer />
  </div>
</template>

<script>
import Campominato from "./Campominato.vue";
import Carosello from "./Carosello.vue";
import Comics from "./Comics.vue";
import Cargo from "./Cargo.vue";
import Discord from "./Discord.vue";
import Spotify from "./Spotify.vue";
import Netflix from "./Netflix.vue";
import Whatsapp from "./Whatsapp.vue";
import Freelancer from "./Freelancer.vue";
import Food4You from "./Food4You.vue";

export default {
  components: {
    Campominato,
    Carosello,
    Comics,
    Cargo,
    Discord,
    Spotify,
    Netflix,
    Whatsapp,
    Freelancer,
    Food4You,
  },
};
</script>

<style lang="scss" scoped></style>
