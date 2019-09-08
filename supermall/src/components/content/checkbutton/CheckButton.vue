<template>
  <div class="check-button">
    <img src="~assets/img/gou.png" :class="{check: isChecked}" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.check-button {
  img {
    width: 20px;
    border-radius: 10px;
    border: 2px solid #aaa;
  }
  .check {
    background-color: red;
    border-color: red;
  }
}
</style>