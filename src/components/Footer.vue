<template>
  <div class="container">
    <div class="row justify-content-between">
      <div>
        <img
          class="montagn"
          src="../../public/images/montagne-resized.png"
          alt=""
        />
      </div>
      <ul class="col">
        <li><h2 class="pb-2">Contatti</h2></li>
        <li><p class="p-0">+39 366 269 4881</p></li>
        <li><p class="p-0">gabrieledipassio.dev@gmail.com</p></li>
        <li>
          <a
            href="https://it.linkedin.com/in/gabriele-di-passio-b3446b276?trk=public_profile_browsemap"
          >
            <font-awesome-icon
              class="icon-color"
              icon="fa-brands fa-linkedin"
            />
            <span>Gabriele Di Passio</span>
          </a>
        </li>
      </ul>
      <ul class="col">
        <li><h2 class="pb-2">Lavori</h2></li>
        <li>
          <a href="https://github.com/TheDusty117?tab=repositories" class="p-0">
            <font-awesome-icon class="icon-color" icon="fa-brands fa-github" />
            <span>https://github.com/TheDusty117?tab=repositories</span>
          </a>
        </li>
      </ul>
      <!-- <ul class="col-3">
        <h2>COSE</h2>
      </ul> -->
    </div>
    <!-- <div class="divider"><hr /></div> -->
  </div>
  <div>
    <div class="container cont-special">
      <img
        class="upside-mount"
        src="../../public/images/montagne-resized.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.montagn {
  rotate: 180deg;
  position: absolute;
  left: 0;
  z-index: -1;
}
.container {
  // padding-top: 200px;
  // padding-bottom: 200px;
  font-family: "JetBrains Mono Variable", sans-serif;
  color: #ff9678;

  h2 {
    font-weight: 1000;
    font-size: 24px;
  }
  p {
    font-family: "JetBrains Mono Variable", sans-serif;
    font-weight: 600;
    padding-bottom: 30px;
    font-size: 18px;
  }
  span {
    font-weight: 600;
    padding-bottom: 30px;
    font-size: 18px;
  }
  .icon-color {
    font-size: 24px;
  }
  a:hover {
    text-decoration: underline;
  }
  span {
    padding-left: 10px;
  }
  hr {
  }
  img {
    width: 100%;
  }
}

@media screen and (max-width: 850px) {
  .col {
    padding-top: 40px;
  }
}

@media screen and (max-width: 1650px) {
  .col {
    padding-top: 40px;
  }
  .montagn {
    display: none;
  }

  .row {
    background-color: #41436a;
  }
  .upside-mount {
    rotate: 180deg;
  }
}

@media screen and (min-width: 1650px) {
  .col {
    padding-top: 40px;
  }
  // .montagn {
  //   display: none;
  // }

  .row {
    // background-color: #41436a;
  }
  .upside-mount {
    display: none;
    // rotate: 180deg;
  }
}
</style>
