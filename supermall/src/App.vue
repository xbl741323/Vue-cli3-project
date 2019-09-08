<template>
  <div id="app">
    <!-- 顶部Header区域 -->
    <mt-header fixed :title="msg">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <transition>
      <keep-alive exclude="Detail">
        <!-- 中间的路由 router-view 区域 -->
        <router-view></router-view>
      </keep-alive>
    </transition>

    <!-- 底部Tabber区域 -->
    <tabbar v-show="tflag"></tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/TabBar.vue";
export default {
  name: "app",
  data() {
    return {
      flag: false,
      msg: "购物街",
      tflag: true
    };
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  methods: {
    goBack() {
      // 点击后退
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal, oldVal) {
      if (newVal === "/home") {
        this.flag = false;
        this.msg = "购物街";
        this.tflag = true;
      } else if (newVal === "/cart") {
        this.flag = true;
        this.msg = "购物车";
        this.tflag = true;
      } else if (newVal === "/category") {
        this.flag = true;
        this.msg = "分类";
        this.tflag = true;
      } else if (newVal === "/profile") {
        this.flag = true;
        this.msg = "个人中心";
        this.tflag = true;
      } else {
        this.flag = true;
        this.tflag = false;
      }
    }
  },
  components: {
    tabbar
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/css/base.css";
.mint-header {
  z-index: 99;
  background-color: rgb(255, 159, 175) !important;
}
#app {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  overflow: visible;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

