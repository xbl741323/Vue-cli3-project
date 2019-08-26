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
      imagesLength: null
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
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    }
  },
  watch: {
    detailInfo() {
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