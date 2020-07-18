<template>
  <div class="easy-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "easy-button-group",
  mounted() {
    let children = this.$el.children;
    if (
      [...children].some(child => {
        return child.tagName !== "BUTTON";
      })
    ) {
      console.error("子元素必须是button");
    }
  }
};
</script>
<style lang="scss">
.easy-button-group {
  display: inline-flex;
  vertical-align: middle;
  button {
    position: relative;
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-left: -1px;
    }
    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:hover {
      z-index: 1;
    }
    &:focus,
    &:active {
      z-index: 2;
    }
  }
}
</style>