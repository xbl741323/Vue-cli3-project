<template>
  <div class="mui-numbox">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" type="number" value="1"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
export default {
  name: "CartButton",
  data() {
    return {};
  },
  mounted() {
    //初始化数字选择框
    mui(".mui-numbox").numbox();
  },
  methods: {},
  props: []
};
</script>

<style lang="scss" scoped>
</style>