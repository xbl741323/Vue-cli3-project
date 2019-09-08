<template>
  <div class="profile-list">
    <div class="first">
      <div class="item">
        <img src="~assets/img/collect.png" alt />
        <span>我的消息</span>
      </div>
      <div class="item">
        <img src="~assets/img/collect.png" alt />
        <span>积分商城</span>
      </div>
      <div class="item">
        <img src="~assets/img/collect.png" alt />
        <span>会员卡</span>
      </div>
    </div>
    <div class="second">
      <div class="item">
        <img src="~assets/img/collect.png" alt />
        <span>我的购物车</span>
      </div>
      <div class="item">
        <img src="~assets/img/collect.png" alt />
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileList"
};
</script>

<style lang="scss" scoped>
.profile-list {
  margin-top: 15px;
  .first{
    .item {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid lightgray;
    padding: 10px;
    font-size: 15px;
    color: #666;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 5px;
    }
  }
  }
  .second{
    margin-top: 15px;
    .item {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid lightgray;
    padding: 10px;
    font-size: 15px;
    align-items: center;
    color: #666;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 5px;
    }
  }
  }
  
}
</style>