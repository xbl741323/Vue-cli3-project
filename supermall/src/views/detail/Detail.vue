<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :lunbotuList="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import { getDetail, Goods } from "network/detail.js";
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: null
    };
  },
  created() {
    // 1.保存传入的iid
    console.log(this.$route.params.iid);
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详细信息
    this.getItemDetail();
  },
  methods: {
    getItemDetail() {
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        // 1.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages;

        // 2.获取商品信息数据
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        console.log(this.goods);
      });
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  }
};
</script>

<style lang="scss" scoped>
</style>