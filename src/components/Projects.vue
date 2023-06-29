<template>
  <div>
    <Campominato />
    <Carosello />
    <Comics />
  </div>
</template>

<script>
import Campominato from "./Campominato.vue";
import Carosello from "./Carosello.vue";
import Comics from "./Comics.vue";

export default {
  components: {
    Campominato,
    Carosello,
    Comics,
  },
};
</script>

<style lang="scss" scoped></style>
