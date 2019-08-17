<template>
  <div class="goods-list">
      <goods-list-item v-for="item in goods" :key="item.id" :goods-item="item"/>
      </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
      GoodsListItem
    }
};
</script>

<style lang="scss" scoped>

</style>