<template>
  <header class="header">
    <div class="headerWrapper">
      <!-- 头部logo -->
      <top/>
      <!-- 导航 -->
      <navigation v-if="isNav" :list="navlist"/>
    </div>
  </header>
</template>

<script>
import Top from "./components/Top.vue";
import Navigation from "./components/Navigation.vue";
export default {
  name: "HeaderWrapper",
  props: {
    navlist: Array,
    isNav: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Navigation,
    Top
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 999;
  height: u(84);
}
.headerWrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
