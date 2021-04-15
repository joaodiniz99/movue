import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/movies",
    name: "movies",
    component: () => import(/* webpackChunkName: "movies" */ "../views/Movies.vue")
  },
  {
    path: "/movie/:id",
    name: "movie-show",
    component: () => import(/* webpackChunkName: "movie" */ "../views/Movie.vue"),
    props: true
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import(/* webpackChunkName: "contacts" */ "../views/Contacts.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
