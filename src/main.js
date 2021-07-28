// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap";
import "./scss/main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
