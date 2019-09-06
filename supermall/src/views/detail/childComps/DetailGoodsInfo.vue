<template>
  <div class="detail-goods-info">
    <div class="goods-desc">
      <span>*------</span>
      <p>{{ detailinfo.desc }}</p>
      <span>------*</span>
    </div>
    <div class="goods-img">
      <div class="img-desc">{{ detailinfo.detailImage[0].key }}</div>
      <img
        v-for="item in detailinfo.detailImage[0].list"
        :key="item"
        :src="item"
        @load="imgLoad"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  props: {
    detailinfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      // 判断，所有的图片都加载完了，那么进行一次回调就可以了
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    }
  },
  watch: {
    detailInfo() {
      // 获取图片的个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-goods-info {
  background-color: #fff;
  .goods-desc {
    span {
    }
    p {
      text-indent: 2em;
    }
  }
  .goods-img {
    .img-desc {
      color: #666;
      font-size: 16px;
    }
    img {
      width: 100%;
    }
  }
}
</style>