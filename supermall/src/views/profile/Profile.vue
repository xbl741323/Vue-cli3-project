<template>
  <div id="profile">
    <scroll class="content" :probe-type="0">
      <profile-top></profile-top>
      <profile-list></profile-list>
    </scroll>
  </div>
</template>

<script>
import ProfileTop from "./childComps/ProfileTop.vue";
import ProfileList from "./childComps/ProfileList.vue";
import Scroll from "components/common/Scroll.vue";
export default {
  name: "Profile",
  components: {
    Scroll,
    ProfileTop,
    ProfileList
  }
};
</script>

<style lang="scss" scoped>
#profile {
  height: 100vh;
}
.content {
  height: calc(100% - 90px);
  overflow: hidden;
}
</style>