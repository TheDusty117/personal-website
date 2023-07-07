import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUserSecret,
  faTruck,
  faBomb,
  faBurger,
  faCommentDots,
  faFilm,
  faUserNinja,
  faPhone,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faSpotify,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

//camion

library.add(
  faUserSecret,
  faTruck,
  faDiscord,
  faBomb,
  faBurger,
  faCommentDots,
  faSpotify,
  faFilm,
  faWhatsapp,
  faUserNinja,
  faLinkedin,
  faPhone,
  faFileArrowDown,
  faGithub
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
