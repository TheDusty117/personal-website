<template>
  <div class="section">
    <div class="container">
      <div class="row justify-content-between m-0">
        <div class="btn-logo col-5">
          <a href="#">
            <img
              class="my-logo roseversion"
              src="../../public/images/rose-logo-GDP.png"
              alt=""
            />
            <img
              class="my-logo blueversion"
              src="../../public/images/logo-GDP.png"
              alt=""
            />
          </a>
          <!-- <button  style="--color:#41436A;--border:2px;--slant:.5em">Button</button> -->
        </div>

        <div class="col-5">
          <ul class="button-bar d-flex justify-content-sm-end gap-4 p-0 m-0">
            <li>
              <button style="--color: #ff9578; --border: 2px; --slant: 0.5em">
                Lavori
              </button>
            </li>
            <li>
              <button style="--color: #ff9578; --border: 2px; --slant: 0.5em">
                Contatti
              </button>
            </li>
            <li>
              <button style="--color: #ff9578; --border: 2px; --slant: 0.5em">
                CV
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  font-family: "JetBrains Mono Variable", sans-serif;
}

button {
  --border: 5px; /* the border width */
  --slant: 0.7em; /* control the slanted corners */
  --color: #37e8fc; /* the color */

  font-size: 15px;
  padding: 0.4em 1.2em;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: var(--color);
  background: linear-gradient(to bottom left, var(--color) 50%, #0000 50.1%) top
      right,
    linear-gradient(to top right, var(--color) 50%, #0000 50.1%) bottom left;
  background-size: calc(var(--slant) + 1.3 * var(--border))
    calc(var(--slant) + 1.3 * var(--border));
  background-repeat: no-repeat;
  box-shadow: 0 0 0 200px inset var(--s, #0000),
    0 0 0 var(--border) inset var(--color);
  clip-path: polygon(
    0 0,
    calc(100% - var(--slant)) 0,
    100% var(--slant),
    100% 100%,
    var(--slant) 100%,
    0 calc(100% - var(--slant))
  );
  transition: color var(--t, 0.3s), background-size 0.3s;
}
button:focus-visible {
  outline-offset: calc(-1 * var(--border));
  outline: var(--border) solid #000c;
  clip-path: none;
  background-size: 0 0;
}
button:hover,
button:active {
  background-size: 100% 100%;
  color: #fff;
  --t: 0.2s 0.1s;
}
button:active {
  --s: #0005;
  transition: none;
}

.roseversion {
  display: none;
}
.my-logo {
  height: 40px;
}
.my-logo:hover {
  transform: scale(1.2);
  transition: transform 0.2s; /* Animation */
  cursor: pointer;
}

.btn-custom {
  color: #41436a;
}

.row {
  padding-top: 10px;
  padding-bottom: 10px;
}

.button-bar {
  color: #ff957800;
}
.section {
  background: linear-gradient(50deg, #ff9578 60%, #41436a 60%);
  width: 100%;
  position: fixed;
  z-index: 999;
  .col-salmon {
  }
  .col-blu {
    background-color: #41436a;
    min-height: 75px;
  }
}

@media screen and (max-width: 577px) {
  .btn-logo {
  }
}

@media screen and (max-width: 1000px) {
  .roseversion {
    display: inline-block;
  }

  .blueversion {
    display: none;
  }
  .btn-logo {
    // display: none;
  }

  .section {
    background: #41436a;
  }
  .button-bar {
    justify-content: space-between;
  }

  .col-sm-5 {
    width: 100%;
  }
}
</style>
