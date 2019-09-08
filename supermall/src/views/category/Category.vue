<template>
  <div class="category">
<category-list></category-list>
  </div>
</template>

<script>
import CategoryList from "./childComps/CategoryList.vue"
export default {
  name: "Category",
  components: {
    CategoryList
  }
};
</script>

<style lang="scss" scoped>
</style>