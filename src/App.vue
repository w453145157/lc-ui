<template>
  <div id="app">
    <easy-button type="primary">默认按钮</easy-button>
    <easy-button type="success">默认按钮</easy-button>
    <easy-button type="danger">默认按钮</easy-button>
    <easy-button type="warning">默认按钮</easy-button>
    <easy-button type="info">默认按钮</easy-button>

    <easy-button type="primary" icon="sousuo">默认按钮</easy-button>
    <easy-button type="success" icon="xiazai">默认按钮</easy-button>
    <easy-button type="danger" icon="shangchuan">默认按钮</easy-button>
    <easy-button type="danger" icon="shangchuan" iconPosition="right">默认按钮</easy-button>
    <easy-button type="danger" icon="shangchuan" iconPosition="right">默认按钮</easy-button>
    <easy-button type="danger" loading icon="shangchuan" iconPosition="right">默认按钮</easy-button>
    <easy-button type="primary" icon="shangchuan" iconPosition="right" @click="fn">点击触发</easy-button>

    <easy-button-group>
      <easy-button iconPosition="left" icon="left">上一页</easy-button>
      <easy-button iconPosition="right" icon="right">下一页</easy-button>
    </easy-button-group>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    fn(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.easy-button {
  margin: 5px;
}
.easy-button-group {
  margin: 5px;
  .easy-button {
    margin: 0;
  }
}
</style>
