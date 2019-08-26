<template>
  <div class="detail-info">
    <div class="detail-title">{{ goods.title }}</div>
    <div class="detail-price">
      <span class="newprice">{{ goods.newPrice }}</span>
      <span class="oldprice">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="detail-desc">
      <span v-for="item in goods.columns" :key="item.index">{{ item }}</span>
    </div>
    <div class="detail-intr">
      <span>
        <img :src="goods.services[0].icon" alt />
        {{ goods.services[0].name }}
      </span>
      <span>
        <img :src="goods.services[1].icon" alt />
        {{ goods.services[1].name }}
      </span>
      <span>
        <img :src="goods.services[2].icon" alt />
        {{ goods.services[2].name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-info {
  width: 100%;
  background-color: #fff;
  margin-bottom: 5px;
  .detail-title {
    font-size: 15px;
    padding: 8px;
    padding-bottom: 0px;
  }
  .detail-price {
    padding: 8px;
    .newprice {
      color: rgb(255, 159, 175);
      font-size: 18px;
    }
    .oldprice {
      margin-left: 5px;
      color: #666;
      font-size: 12px;
      text-decoration: line-through;
    }
    .discount {
      background-color: rgb(255, 159, 175);
      color: #fff;
      font-size: 10px;
      padding: 4px 8px;
      border-radius: 10px;
      margin-left: 5px;
    }
  }
  .detail-desc {
    margin: 13px auto 10px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid lightgray;
    span {
      flex: 1;
      text-align: center;
      font-size: 12px;
      justify-content: space-between;
      color: #666;
    }
  }
  .detail-intr {
    display: flex;
    padding: 15px 0;
    text-align: center;
    span {
      font-size: 12px;
      flex: 1;
      justify-content: space-between;
      img {
        width: 12px;
      }
    }
  }
}
</style>