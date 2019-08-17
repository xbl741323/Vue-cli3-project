<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.url">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { getHomeMultidatab } from "network/home.js";
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 15px 0 30px;
  background-color: #fff;
}
.recommend-item {
  flex: 1;
}
.recommend-item a{
  color: #666;
}
.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 0px;
}
</style>