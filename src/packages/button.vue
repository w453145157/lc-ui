<template>
  <button class="easy-button" :class="btnClass" :disabled="loading" @click="$emit('click', $event)">
    <easy-icon class="icon" v-if="icon && !loading" :icon="icon"></easy-icon>
    <easy-icon class="icon" v-if="loading" icon="loading"></easy-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "easy-button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["danger", "primary", "success", "warning", "info"].includes(type)
        ) {
          console.error(
            "type类型必须为" +
              ["danger", "primary", "success", "warning", "info"].join(",") +
              "中的一种"
          );
        }
        return true;
      }
    },
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(str) {
        console.assert(
          ["left", "right"].includes(str),
          "iconPosition的值必须为left、right"
        );
        return true;
      }
    }
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`easy-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`easy-button-${this.iconPosition}`);
      }
      return classes;
    }
  }
};
</script>
<style lang="scss">
@import "../styles/_var.scss";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.easy-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: flex-start;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }
  @each $types,
    $color
      in (
        primary: $primary,
        danger: $danger,
        success: $success,
        info: $info,
        warning: $warning
      )
  {
    &-#{$types} {
      color: #fff;
      background: #{$color};
      border: 1px solid #{$color};
      fill: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $types,
    $color
      in (
        primary: $primary-active,
        danger: $danger-active,
        warning: $warning-active,
        success: $success-active,
        info: $info-active
      )
  {
    &-#{$types}:focus,
    &-#{$types}:active {
      color: #fff;
      background: #{$color};
      border: 1px solid #{$color};
    }
  }
  .icon {
    width: 16px;
    height: 16px;
  }
  .icon + span {
    margin-left: 4px;
  }

  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
    .icon + span {
      margin-left: 0px;
      margin-right: 4px;
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
</style>