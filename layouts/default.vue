<template>
  <div id="app" ref="scrillCurrent" v-on:scroll="handleSrcoll">
    <!-- 头部组件 -->
    <header-wapper :navlist="navlist"/>
    <!-- 路由 -->
    <nuxt/>
    <!-- 回到顶部 -->
    <back-top :el="$refs['scrillCurrent']"/>
  </div>
</template>
<script>
import { mapState } from "vuex";
import HeaderWapper from "@/components/public/header/index.vue";
import BackTop from "@/components/public/backTop/index.vue";
export default {
  components: {
    HeaderWapper,
    BackTop
  },
  computed: {
    ...mapState(["navlist"])
  },
  methods: {
    /**
     * 监听滚动事件 执行 队列
     */
    handleSrcoll(e) {
      this.$scrollEvent.exec(e);
    }
  },
  watch: {
    $route() {
      // 路由改变就清空当前 滚动事件列表
      this.$scrollEvent.reset();
      // 如果路由改变 就 回到顶部
      this.$refs["scrillCurrent"].scrollTop = 0;
    }
  }
};
</script>

<style>
#app {
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  display: block;
  overflow-y: auto;
  background: #f9f9f9;
}
</style>
