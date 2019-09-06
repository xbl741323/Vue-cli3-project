<template>
  <div class="detail-navbar">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="title-item"
      :class="{active: index === currentIndex}"
      @click="titleClick(index)"
    >{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-navbar {
  width: 100%;
  height: 35px;
  border-bottom: 1px solid lightgray;
  font-size: 12px;
  color: #666;
  text-align: center;
  display: flex;
}
.title-item {
  flex: 1;
  //   flex: 0 0 50px;
  height: 35px;
  line-height: 35px;
}
.active{
  color:  rgb(255, 159, 175);
}
</style>