<template>
  <div class="container">
    <h2 class="text-center">
      <a :href="pdfUrl" download>
        <Button />
      </a>
    </h2>
    <img
      class="cv-img"
      src="../../public/images/Gabriele Di Passio CV 2023.png"
      alt=""
    />
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      pdfUrl: "../../public/downloadable/Gabriele Di Passio CV 2023.pdf", // Assicurati di sostituire "nome_del_tuo_file.pdf" con il nome del tuo file PDF reale
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 75px;
  min-height: 100vh;
  .cv-img {
    width: 100%;
  }
}
</style>
