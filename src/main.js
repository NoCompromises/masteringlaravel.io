// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap";
require("bootstrap-icons/font/bootstrap-icons.css");
import "./scss/main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
