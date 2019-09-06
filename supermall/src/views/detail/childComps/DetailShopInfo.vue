<template>
  <div class="detail-shop-info">
    <div class="shop-logo">
      <span class="logo">
        <img :src="shop.logo" alt />
      </span>
      <span class="logo-name">{{ shop.name }}</span>
    </div>
    <div class="shop-desc">
      <div class="left">
        <div class="left-first">
          <span class="one">{{ shop.sells}}</span>
          <span class="two">总销量</span>
        </div>
        <div class="left-second">
          <span class="one">{{ shop.goodsCount }}</span>
          <span class="two">全部宝贝</span>
        </div>
      </div>
      <div class="right">
        <div>
          <span>{{ shop.score[0].name }}</span>
          <span style="color:lightgreen">{{ shop.score[0].score }}</span>
          <span style="color:lightgreen">低</span>
        </div>
        <div>
          <span>{{ shop.score[1].name }}</span>
          <span style="color:red">{{ shop.score[1].score }}.00</span>
          <span style="color:red">高</span>
        </div>
        <div>
          <span>{{ shop.score[2].name }}</span>
          <span style="color:lightgreen">{{ shop.score[2].score }}</span>
          <span style="color:lightgreen">低</span>
        </div>
      </div>
    </div>
    <div class="detail-home">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-shop-info {
  height: 179px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  .shop-logo {
    height: 80px;
    background-color: #fff;
    padding: 25px 10px 10px 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    .logo {
      img {
        width: 40px;
        border-radius: 30px;
        border: 1px solid rgb(110, 100, 100);
      }
    }
    .logo-name {
      display: inline;
      line-height: 30px;
      margin-left: 10px;
      color: #666;
      font-size: 15px;
    }
  }
  .shop-desc {
    .left {
      width: 50%;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      padding: 15px 0 0 20px;
      .left-first {
        display: flex;
        flex-direction: column;
        text-align: center;
        .one {
          font-size: 15px;
          padding-bottom: 2px;
        }
        .two {
          font-size: 12px;
        }
      }
      .left-second {
        display: flex;
        flex-direction: column;
        text-align: center;
        border-right: 1px solid lightgray;
        padding: 0px 25px 0px 0px;
        .one {
          font-size: 15px;
          padding-bottom: 2px;
        }
        .two {
          font-size: 12px;
        }
      }
    }
    .right {
      width: 42%;
      text-align: left;
      padding-top: 5px;
      div {
        font-size: 13px;
        span {
          margin-right: 10px;
        }
      }
    }
  }
  .detail-home {
    width: 100%;
    margin: 0px auto;
    background-color: #fff;
    text-align: center;
    font-size: 13px;
    padding: 15px 0 40px 0; 
    span {
      background-color: rgb(226, 226, 226);
      padding: 5px 40px;
      border-radius: 5px;
      color: #666;
    }
  }
}
</style>