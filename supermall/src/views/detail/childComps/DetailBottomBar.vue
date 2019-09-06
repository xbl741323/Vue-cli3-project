<template>
  <div class="bottom-bar">
    <div class="item-left">
      <div>
        <span>
          <img src="~assets/img/kefu.png" alt />
        </span>
        <span>客服</span>
      </div>
      <div>
        <span>
          <img src="~assets/img/dianpu.png" alt class="dianpu" />
        </span>
        <span>店铺</span>
      </div>
      <div>
        <span>
          <img src="~assets/img/shoucang.png" alt />
        </span>
        <span>收藏</span>
      </div>
    </div>
    <div class="item-right">
      <span class="cart" @click="addToCart">加入购物车</span>
      <span class="buy">购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  background-color: red;
  height: 55px;
  position: fixed;
  width: 100%;
  bottom: 0px;
  display: flex;
  text-align: center;
  z-index: 99;
}
.item-left {
  background-color: #fff;
  display: flex;
  font-size: 13px;
  color: #666;
  flex: 1;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    span {
      img {
        padding-top: 5px;
        width: 22px;
      }
      .dianpu {
        padding-top: 7px;
      }
    }
  }
}
.item-right {
  display: flex;
  flex: 1;
  .cart {
    flex: 1;
    background-color: yellow;
    font-size: 15px;
    line-height: 55px;
  }
  .buy {
    flex: 1;
    font-size: 15px;
    line-height: 55px;
    color: #fff;
    background-color: rgb(243, 174, 186);
  }
}
</style>