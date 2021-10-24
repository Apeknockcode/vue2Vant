import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "@/tools/api/index"; //引入接口文件

Vue.prototype.$Api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
