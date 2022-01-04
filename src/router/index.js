import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ValidationHome from "../views/ValidationHome.vue";
import ValidationWorksheet from "../views/ValidationWorksheet.vue";
import ValidationBook from "../views/ValidationBook.vue";
import SecurityLandingPage from "../views/SecurityLandingPage.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/validation",
    name: "ValidationHome",
    component: ValidationHome,
  },
  {
    path: "/worksheet",
    name: "ValidationWorksheet",
    component: ValidationWorksheet,
    meta: {
      title: "Laravel Validation Worksheet",
    },
  },
  {
    path: "/laravel-validation-book",
    name: "ValidationBook",
    component: ValidationBook,
    meta: {
      title: "Laravel Validation Book",
    },
  },
  {
    path: "/security",
    name: "SecurityLandingPage",
    component: SecurityLandingPage,
    meta: {
      title: "Laravel App Security",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

const defaultTitle = "Mastering Laravel";
router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || defaultTitle;
  });
});

export default router;
