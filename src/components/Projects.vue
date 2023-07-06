<template>
  <div>
    <Campominato />
    <Carosello />
    <Comics />
    <Cargo />
    <Discord />
    <Spotify />
  </div>
</template>

<script>
import Campominato from "./Campominato.vue";
import Carosello from "./Carosello.vue";
import Comics from "./Comics.vue";
import Cargo from "./Cargo.vue";
import Discord from "./Discord.vue";
import Spotify from "./Spotify.vue";

export default {
  components: {
    Campominato,
    Carosello,
    Comics,
    Cargo,
    Discord,
    Spotify,
  },
};
</script>

<style lang="scss" scoped></style>
