<template>
  <div id="home">
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingup="loadMore"
    >
      <!-- 轮播图区域 -->
      <Swiper :lunbotuList="lunbotuList" :isfull="true"></Swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control-fix" :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { getHomeMultidatab, getHomeGoods } from "network/home.js";
import Swiper from "components/common/Swiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";
export default {
  name: "Home",
  data() {
    return {
      lunbotuList: [], //保存轮播图的数据,
      recommends: [],
      titles: ["流行", "新款", "精品"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },
  created() {
    // 1.请求多个数据
    this.getLunbotu();
    // 2.请求商品数据
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
    // 3.监听item中图片加载完成
    this.$bus.$on('itemImgLoad',() => {
      this.$refs.scroll.refresh()
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // console.log(index);
    },
    backClick() {
      // console.log("回到顶部")
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 1000;
    },
    loadMore() {
      // console.log("上拉加载更多");
      this.getGoods(this.currentType)
    },

    /**
     * 网络请求相关的方法
     */
    getLunbotu() {
      getHomeMultidatab().then(res => {
        // console.log(res);
        this.lunbotuList = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list = this.goods[type].list.concat(res.data.list);
        // console.log(this.goods[type].list);
        this.goods[type].page = page;
      });
    }
  },
  components: {
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
}
.tab-control-fix {
  position: sticky;
  top: 40px;
  z-index: 9;
}
.content {
  height: calc(100% - 90px);
  overflow: hidden;
}
</style>