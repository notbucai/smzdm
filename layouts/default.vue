<template>
  <div id="app" ref="scrillCurrent" v-on:scroll="handleSrcoll">
    <header-wapper :navlist="navlist"/>
    <nuxt/>
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
    handleSrcoll(e) {
      this.$scrollEvent.exec(e);
    }
  },
  watch: {
    $route() {
      this.$scrollEvent.reset();
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
