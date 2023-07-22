import { createApp } from "vue";
import App from "./App";
import router from "./router";

// import bootstrap custom styles
import "./assets/styles/main";

const app = createApp(App);
app.use(router);
app.mount("#app");
