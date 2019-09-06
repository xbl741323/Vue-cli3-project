<template>
  <div class="cart-list">
    <scroll class="content">
      <!-- <div v-for="item in cartList" :key="item">{{item}}</div> -->
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
      <li>奶还</li>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/Scroll.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    Scroll
  },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>

<style lang="scss" scoped>
.cart-list {
  height: 100%;
}
.content {
  height: calc(100% - 90px);
}
</style>