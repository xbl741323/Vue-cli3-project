<template>
  <div class="goods-item" @click="itemClick(goodsItem.iid)">
    <img :src="showImage" alt @load="imgLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title}}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imgLoad() {
      // 事件总线
      if (this.$route.path.indexOf("/home")) {
        this.$bus.$emit("itemImgLoad");
      } else if (this.$route.path.indexOf("/detail")) {
        this.$bus.$emit("detailItemImgLoad");
      }
    },
    itemClick(iid) {
      // console.log('跳转到详情页')
      this.$router.push({ name: "goodsinfo", params: { iid } });
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-item {
  background-color: #fff;
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 8px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0px;
}
.goods-info .price {
  color: rgb(255, 159, 175);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/collect.png") 0 0/14px 14px;
}
</style>