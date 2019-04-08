<template>
  <section class="navwrapper">
    <!-- 导航 -->
    <nav class="navigation" ref="navScroll">
      <!-- <a href class="active"></a> -->

      <nuxt-link to="/">首页</nuxt-link>
      <nuxt-link :to="item.url" v-for="item in list" :key="item.url" v-text="item.name"></nuxt-link>
    </nav>
    <!-- 全部导航 -->
    <div class="all-tabs">
      <nuxt-link to="/classify" class="conent">
        <i class="iconfont">&#xe7db;</i>
        <span>分类</span>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "navwrapper",
  created() {
    this.$nextTick(() => {
      const x = document.querySelector(".nuxt-link-active:not(:first-child)");
      if (x) {
        this.$refs["navScroll"].scrollLeft =
          x.offsetLeft - this.$refs["navScroll"].offsetWidth / 2;
      }
    });
  },
  props: {
    list: Array
  }
};
</script>

<style lang="scss" scoped>
.navwrapper {
  background: #fff;
  position: relative;
  box-shadow: 0 u(4) u(6) rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border-bottom: u(1) solid #f9f9f9;
  .all-tabs {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    height: 100%;
    width: u(58);
    box-sizing: border-box;
    background-color: #fff;
    .conent {
      display: flex;
      align-items: center;
      background-color: #fff;
      z-index: 2;
      width: 100%;
      height: 100%;
      padding-left: u(6);
      font-size: u(10);
      box-sizing: border-box;
      text-decoration: none;
      span {
        color: #333;
        padding: u(6);
        white-space: nowrap;
      }
      .iconfont {
        font-size: u(14);
        padding: u(0);
      }
    }
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: u(4);
      height: 100%;
      width: u(8);
      background-color: #fff;
      box-shadow: -2px -2px 8px #cccc;
    }
  }
}
.navigation {
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: hidden;
  width: u(304);

  display: flex;
  align-items: center;

  white-space: nowrap;

  background-color: #fff;
  &::-webkit-scrollbar {
    display: none;
    height: 0 !important;
  }
  > a {
    &.active,
    &.nuxt-link-exact-active,
    &.nuxt-link-active {
      $_color: rgb(238, 67, 0);
      color: $_color;
      &::after {
        content: "";
        position: absolute;
        left: 20%;
        bottom: 0;
        height: 3px;
        width: 60%;
        background-color: $_color;
      }
    }
    position: relative;
    height: 100%;
    box-sizing: border-box;
    line-height: u(30);
    text-decoration: none;
    display: block;
    margin: 0 u(4);
    padding: u(4) u(8);
    color: #333;
    /* background-color: #987; */
    font-size: u(14);
    font-weight: 700;
  }
}
</style>
