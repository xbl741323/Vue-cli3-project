<template>
  <div class="detail-navbar">
    <div v-for="item in titles" :key="item.id" class="title-item">{{ item}}</div>
  </div>
</template>

<script>
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"]
    };
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
</style>