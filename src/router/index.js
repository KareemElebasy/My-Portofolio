import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DemoProjects from "../views/DemoProjects.vue";
import ContactPage from "../views/ContactPage.vue";
import AboutPage from "../views/AboutPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/projects",
    name: "projects",
    component: DemoProjects,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/:notfount",
    name: "notFound",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
