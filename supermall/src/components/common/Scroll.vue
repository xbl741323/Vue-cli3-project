<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 1.创建 BScroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    //  2.监听滚动的位置，为保证代码的严谨性，加了一个判断
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        //   console.log(position);
        this.$emit("scroll", position);
      });
    }
    // console.log(this.scroll);

    // 3.监听上拉事件，为保证代码的严谨性，加了一个判断
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingup");
        this.scroll.finishPullUp(); //完成多次上拉加载更多
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // 为什么这样做？还不理解
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      // console.log("......xxx");
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>