// 所有组件的入口

let files = require.context("./", false, /\.vue$/);

const install = (Vue) => {
  files.keys().forEach((key) => {
    let com = files(key).default;
    let name = com.name;
    Vue.component(name, com);
  });
};

// import Button from "./button.vue";
// import Icon from "./icon.vue";
// const install = (Vue) => {
//   console.log(Vue);
//   Vue.components(Button.name, Button);
//   Vue.components(Icon.name, Icon);
// };

if (typeof window.Vue !== "undefined") {
  install(Vue);
}

export default { install };
