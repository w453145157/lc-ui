import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import EasyUI from "./packages";
Vue.use(EasyUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
