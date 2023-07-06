<template>
  <div>
    <Campominato />
    <Carosello />
    <Comics />
    <Cargo />
    <Discord />
    <Spotify />
    <Netflix />
    <Whatsapp />
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
  },
};
</script>

<style lang="scss" scoped></style>
