<template>
  <div id="swiper">
    <!-- 将来，谁使用此轮播图组件，谁为我们传递 lunbotuList -->
    <!-- 此时，lunbotuList 应该是父组件向子组件传值来设置 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.image" alt :class="{'full':isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name:'Swiper',
  props: ["lunbotuList", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      //   width: 100%;
      height: 100%;
    }
    .mui-media-body {
      font-size: 13px;
    }
  }
}
.full {
  width: 100%;
}
</style>
