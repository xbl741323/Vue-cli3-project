<template>
  <div class="profile-top">
    <div class="login">
      <div class="img">
        <img src="~assets/img/profile.png" alt />
      </div>
      <div class="desc">
        <span>登陆/注册</span>
        <span class="phone">暂无绑定手机号</span>
      </div>
      <div class="right">></div>
    </div>
    <div class="list">
      <div>
        <span class="number">0.00元</span>
        <span class="desc">我的余额</span>
      </div>
      <div>
        <span class="number">0个</span>
        <span class="desc">我的优惠</span>
      </div>
      <div>
        <span class="number">0分</span>
        <span class="desc">我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTop"
};
</script>

<style lang="scss" scoped>
.profile-top {
  .login {
    height: 100px;
    background-color: #ff9faf;
    display: flex;
    align-items: center;
    color: #fff;
    .img {
      width: 50px;
      height: 50px;
      background-color: #fff;
      border-radius: 40px;
      margin-left: 30px;
      img {
        width: 30px;
        height: 30px;
        margin: 10px;
        border-radius: 40px;
        background-color: #fff;
      }
    }
    .desc {
      display: flex;
      flex-direction: column;
      font-size: 15px;
      margin-left: 15px;
      span {
      }
      .phone {
        font-size: 12px;
      }
    }
    .right {
      margin-left: 150px;
    }
  }
  .list {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    text-align: center;
    div {
      display: flex;
      flex-direction: column;
      padding: 15px 20px 15px  20px;
      .number{
          color:  #ff9faf;
          font-size: 15px;
      }
      .desc{
          font-size: 14px;
          color: #666;
      }
    }
  }
}
</style>