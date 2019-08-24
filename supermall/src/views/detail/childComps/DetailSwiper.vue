<template>
  <div class="detail-swiper">
    <!-- 将来，谁使用此轮播图组件，谁为我们传递 lunbotuList -->
    <!-- 此时，lunbotuList 应该是父组件向子组件传值来设置 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item" alt/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "DetailSwiper",
  props: ["lunbotuList", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 250px;
  .mint-swipe-item {
    text-align: center;
    img {
      width: 100%;
      height: 460px;
    }
    .mui-media-body {
      font-size: 13px;
    }
  }
}
</style>
