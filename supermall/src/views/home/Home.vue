<template>
  <div id="home">
    <!-- 轮播图区域 -->
    <Swiper :lunbotuList="lunbotuList" :isfull="true"></Swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control-fix" :titles="titles"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>

<script>
import { 
  getHomeMultidatab,
  getHomeGoods
   } from "network/home.js";
import Swiper from "components/common/Swiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList";
export default {
  name: "Home",
  data() {
    return {
      lunbotuList: [], //保存轮播图的数据,
      recommends: [],
      titles: ['流行','新款','精品'],
       goods:{
        'pop':{page: 0, list:[]},
        'new':{page: 0, list:[]},
        'sell':{page: 0, list:[]},
      }
    };
  },
  created() {
    this.getLunbotu();
    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell');
  },
  methods: {
    getLunbotu() {
      getHomeMultidatab().then(res => {
        // console.log(res);
        this.lunbotuList = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res =>{
            // console.log(res);
            this.goods[type].list = this.goods[type].list.concat(res.data.list);
            console.log(this.goods[type].list)  
            this.goods[type].page = page;
      })
    }
  },
  components: {
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  }
};
</script>

<style lang="scss" scoped>
.tab-control-fix{
  position: sticky;
  top: 40px;
}
</style>