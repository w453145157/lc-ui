import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";

import Button from "@/packages/button.vue";
import Icon from "@/packages/icon.vue";

describe("button.vue", () => {
  it("1.测试button能否正常显示slot的内容", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "easy-ui",
      },
    });
  });
  it("2.测试icon传入是否正常显示", () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        "easy-icon": Icon,
      },
      propsData: {
        icon: "edit",
      },
    });
    expect(wrapper.find("use").attributes("href")).to.eq("#icon-edit");
  });
  it("3.测试loading时，是否为禁用", () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        "easy-icon": Icon,
      },
      propsData: {
        loading: true,
      },
    });
    expect(wrapper.find("use").attributes("href")).to.eq("#icon-loading");
    expect(wrapper.find("button").attributes("disabled")).to.eq("disabled");
  });
  it("4.测试按钮是否能正常点击", () => {
    const wrapper = shallowMount(Button, {
      stubs: ["easy-icon"],
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click").length).to.eq(1);
  });
  it("5.按钮传入position是否正常显示", () => {
    const wrapper = shallowMount(Button, {
      attachToDocument: true, //挂载到document上
      stubs: {
        "easy-icon": Icon,
      },
      slots: {
        default: "easy-ui",
      },
      propsData: {
        iconPosition: "left",
      },
    });
    let ele = wrapper.vm.$el.querySelector("span");
    expect(getComputedStyle(ele).order).to.eq("2");
    wrapper.setProps({ iconPosition: "right" });
    return wrapper.vm.$nextTick().then(() => {
      expect(getComputedStyle(ele).order).to.eq("1");
    });
  });
});
