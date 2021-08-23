import { createRouter, createWebHistory } from "vue-router";
import ValidationHome from "../views/ValidationHome.vue";
import ValidationWorksheet from "../views/ValidationWorksheet.vue";
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
});

export default router;
