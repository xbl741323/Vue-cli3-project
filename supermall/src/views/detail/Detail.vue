<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :lunbotuList="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailinfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paraminfo="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar class="detail-bottom" @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail.js";
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import Scroll from "components/common/Scroll.vue";
import { backToMixin } from "common/mixin.js";
import { Toast } from "mint-ui";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeToYs: []
    };
  },
  mixins: [backToMixin],
  created() {
    // 1.保存传入的iid
    // console.log(this.$route.params.iid);
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详细信息
    this.getItemDetail();

    // 3.请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  mounted() {
    this.$bus.$on("detailItemImgLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  updated() {},
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

        // 4.保存商品的详细数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );

        // 7.取出评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }

        this.$nextTick(() => {
          this.themeToYs = [];
          this.themeToYs.push(0);
          this.themeToYs.push(this.$refs.params.$el.offsetTop);
          this.themeToYs.push(this.$refs.comment.$el.offsetTop);
          this.themeToYs.push(this.$refs.recommends.$el.offsetTop);
          console.log(this.themeToYs);
        });
      });
    },
    imageLoad() {
      this.$ref.scroll.refresh();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeToYs[index], 200);
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      // console.log(position);
      this.isShowBackTop = -position.y > 1000;
    },
    addToCart() {
      // 1.获取购物车需要展示的商品信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      console.log(product);

      // 2.将商品添加到购物车里
      // this.$store.commit("addCart", product);
      this.$store.dispatch("addCart", product);
      Toast("加入购物车成功!");
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
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
  height: calc(100% - 40px - 90px);
}
</style>