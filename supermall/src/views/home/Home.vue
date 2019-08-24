<template>
  <div id="home">
    <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2" v-show="isTabFixed"></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingup="loadMore"
    >
      <!-- 轮播图区域 -->
      <Swiper :lunbotuList="lunbotuList" :isfull="true" @swiperImgLoad="swiperImgLoad"></Swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl" v-show="!isTabFixed"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { getHomeMultidatab, getHomeGoods } from "network/home.js";
import { debounce } from "common/utils.js";
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
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  created() {
    // 1.请求多个数据
    this.getLunbotu();
    // 2.请求商品数据
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  mounted() {
    // 实现防抖,没实现成功
    // const refresh = debounce(this.$refs.scroll.refresh, 50);

    // 1.监听item中图片加载完成
    this.$bus.$on("itemImgLoad", () => {
      this.$refs.scroll.refresh();
      // console.log(".....");
      // refresh();
    });
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY);
    this.$refs.scroll.refresh()// 最好进行一次refresh
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
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
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
      // console.log(index);
    },
    backClick() {
      // console.log("回到顶部")
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;

      // 2.决定tabControl是否吸顶(position: fixed)
      // 这有问题，还没解决！！！！！！！！！！！！！
      this.isTabFixed = -position.y > this.tabOffsetTop - 40;
    },
    loadMore() {
      // console.log("上拉加载更多");
      this.getGoods(this.currentType);
    },
    // 2.获取tabControl的offsetTop
    // 所有的组件都有一个属性$el,用于获取组件中的元素
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
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
.content {
  height: calc(100% - 90px);
  overflow: hidden;
}
</style>