<template>
  <section>
    <CvCard />
  </section>
</template>

<script>
import CvCard from "../components/CvCard.vue";

export default {
  components: {
    CvCard,
  },
};
</script>

<style lang="scss" scoped>
section {
  background-image: url(../../public/images/MONTAGNE.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
