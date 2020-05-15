import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import "./styles/custom.scss";

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
