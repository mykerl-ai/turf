import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/LoginPage.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/RegisterPage.vue"),
  },

  {
    path: "/apartment/:id",
    name: "ViewApartment",
    component: () => import("@/views/ViewApartment.vue"),
  },

  {
    path: "/gallery/:id",
    name: "ApartmentGallery",
    component: () => import("@/views/ApartmentGallery.vue"),
  },
  // {
  //   path: "/home",
  //   component: () => import("@/views/HomePage.vue"),
  // },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "/book",
        component: () => import("@/views/BookDate.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2Page.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
