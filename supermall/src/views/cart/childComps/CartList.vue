<template>
  <div class="cart-list">
    <scroll class="content">
      <div v-for="item in cartList" :key="item.iid" class="cartitem-info">
        <check-button :is-checked="item.checked" @click.native="checkClick(item)"></check-button>
        <img :src="item.image" alt />
        <div class="cartitem-right">
          <div class="cartitem-desc">
            <span class="title">{{ item.title}}</span>
            <span class="desc">{{ item.desc }}</span>
          </div>
          <div class="cartitem-price">
            <span class="price">￥{{ item.price }}</span>
            <span class="count">×{{ item.count }}</span>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/Scroll.vue";
import CheckButton from "components/content/checkbutton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    Scroll,
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  methods: {
    checkClick(item) {
      item.checked = !item.checked;
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-list {
  height: 100%;
}
.content {
  height: calc(100% - 90px - 40px);
  .cartitem-info {
    background-color: #fff;
    margin-top: 2px;
    display: flex;
    height: 120px;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 80px;
      height: 120px;
      border-radius: 8px;
      padding: 5px;
    }
    .cartitem-right {
      display: flex;
      flex-direction: column;
      .cartitem-desc {
        height: 95px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 15px;
          width: 230px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 15px;
        }
        .desc {
          font-size: 13px;
          width: 230px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: #666;
        }
      }
      .cartitem-price {
        padding: 8px;
        display: flex;
        justify-content: space-between;
        .price {
          color: orangered;
        }
        .count {
          color: #666;
        }
      }
    }
  }
}
</style>