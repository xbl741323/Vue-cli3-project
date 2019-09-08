<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" @click.native="checkClick"></check-button>
      <span class="all">全选</span>
      <span class="price">合计:￥{{totalPrice}}</span>
    </div>
    <div class="pay" @click="calClick">
      <span>去结算({{checkLength}})</span>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { mapGetters } from "vuex";
import CheckButton from "components/content/checkbutton/CheckButton.vue";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        //全部选中
        this.cartList.forEach(item => (item.checked = false));
      } else {
        //未全部选中
        this.cartList.forEach(item => (item.checked = true));
      }
    },
    calClick() {
      if (!this.isSelectAll) {
        Toast("请选择购买的商品！");
      }
    }
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.$store.state.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      //   return !this.cartList.filter(item => !item.checked).length;
      if (this.cartList.length == 0) {
        return false;
      }
      return !this.cartList.find(item => !item.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  width: 100%;
  height: 40px;
  background-color: rgb(226, 225, 225);
  position: fixed;
  bottom: 50px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  .check-content {
    margin-top: 8px;
    display: flex;
    align-items: center;
    .all {
      font-size: 14px;
      color: #666;
      margin-left: 2px;
      margin-bottom: 7px;
    }
    .price {
      font-size: 14px;
      margin-left: 20px;
      margin-bottom: 7px;
    }
  }
  .pay {
    width: 90px;
    background-color: orangered;
    font-size: 15px;
    text-align: center;
    span {
      color: #fff;
    }
  }
}
</style>