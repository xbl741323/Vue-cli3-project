<template>
  <div id="home">
    <!-- 轮播图区域 -->
    <Swiper :lunbotuList="lunbotuList" :isfull="true"></Swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import {getHomeMultidatab} from 'network/home.js'
import Swiper from "components/common/Swiper.vue";
import RecommendView from './childComps/RecommendView.vue'
export default {
  name: "Home",
  data() {
    return {
      lunbotuList: [] ,//保存轮播图的数据,
      recommends:[]
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      getHomeMultidatab().then(res => {
          console.log(res)
        this.lunbotuList = res.data.banner.list
        this.recommends = res.data.recommend.list
      });
    }
  },
  components: {
    Swiper,
    RecommendView
  }
};
</script>

<style lang="scss" scoped>
</style>