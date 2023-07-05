import { createRouter, createWebHistory } from "vue-router";
//importo la page per poi crearci una route
import Home from "./pages/Home.vue";
import CurriculumVitae from "./pages/CurriculumVitae.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/cv",
      name: "curriculumvitae",
      component: CurriculumVitae,
    },
  ],
});

export { router };
