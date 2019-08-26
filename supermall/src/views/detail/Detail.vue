<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :lunbotuList="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailinfo="detailInfo"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods, Shop } from "network/detail.js";
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import Scroll from "components/common/Scroll.vue";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
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
        // console.log(res);
        const data = res.result;
        // 1.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages;

        // 2.获取商品信息数据
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo);

        // 3.保存商品的详细数据
        this.detailInfo = data.detailInfo;

        console.log(this.shop);
      });
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll
  }
};
</script>

<style lang="scss" scoped>
#detail {
  height: 100vh;
  position: relative;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 40px);
}
</style>