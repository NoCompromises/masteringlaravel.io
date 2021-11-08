import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ValidationHome from "../views/ValidationHome.vue";
import ValidationWorksheet from "../views/ValidationWorksheet.vue";
import ValidationBook from "../views/ValidationBook.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
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
