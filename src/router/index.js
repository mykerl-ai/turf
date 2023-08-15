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

  {
    path: "/edit/profile/:id",
    name: "EditProfile",
    component: () => import("@/views/EditProfile.vue"),
  },
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
        path: "/portal",
        name: "PortalPage",
        component: () => import("@/views/PortalPage.vue"),
      },

      {
        path: "/payment",
        name: "PaymentPage",
        component: () => import("@/views/PaymentPage.vue"),
      },
      {
        path: "/payment/plan",
        name: "PaymentPlan",
        component: () => import("@/views/PaymentPlan.vue"),
      },
      {
        path: "/payment/plan/:id",
        name: "PaymentPlanDetails",
        component: () => import("@/views/PaymentPlanDetails.vue"),
      },
      {
        path: "/payment/create-plan/:id",
        name: "CreatePlan",
        component: () => import("@/views/CreatePlan.vue"),
      },

      {
        path: "/inspect/schedule",
        name: "Schedule",
        component: () => import("@/views/SchedulePage.vue"),
      },
      {
        path: "/inspect/schedule/:id",
        name: "ScheduleDetails",
        component: () => import("@/views/ScheduleDetails.vue"),
      },
      {
        path: "/inspect/create-schedule/:id",
        name: "CreateSchedule",
        component: () => import("@/views/CreateSchedule.vue"),
      },

      {
        path: "/payment/final/:id",
        name: "FinalStep",
        component: () => import("@/views/FinalStep.vue"),
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
