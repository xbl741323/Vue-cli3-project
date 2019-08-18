<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item.url" 
    class="tab-control-item" :class="{active: index === currentIndex}"
    @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
      return {
          currentIndex: 0
      }
  },
  methods: {
      itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
      }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  color: #666;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span{
  padding: 5px;
}
.active{
    color:  rgb(255, 159, 175);
}
.active span{
    border-bottom: 3px solid  rgb(255, 159, 175);
}
</style>