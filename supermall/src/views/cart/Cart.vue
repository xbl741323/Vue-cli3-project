<template>
  <div id="cart">
    <!-- 导航（尚未完成） -->

    <!-- 商品列表 -->
       <cart-list></cart-list>

    <!-- 底部汇总 -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList.vue";
export default {
  name: "Cart",
  components: {
    CartList
  },
  computed: {
    //这样可以直接转化成计算属性
    ...mapGetters(["cartLength"])
  }
};
</script>

<style lang="scss" scoped>
#cart{
  height: 100vh;
}
</style>