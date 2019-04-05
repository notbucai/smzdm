<template>
  <section class="h-top">
    <!-- logo -->
    <div class="h-logo">
      <img src="//res.smzdm.com/mobile/wap_v2/dist/img/embed/logo.png" alt="logo">
    </div>
    <!-- 触发搜索 -->
    <div class="h-search">
      <me-input class="h-input" :isMark="true" />
    </div>
  </section>
</template>

<script>
import MeInput from "@/components/public/form/Input.vue";
export default {
  name:"Top",
  components: {
    MeInput
  }
};
</script>

<style lang="scss" scoped>
.h {
  &-top {
    position: relative;
    z-index: 99;
    display: flex;
    height: u(44);
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
  }
  &-logo {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: u(12);
    width: auto;
    img {
      display: block;
      height: 50%;
    }
  }
  &-search {
    width: 100%;
    height: 100%;
    /* background-color: #000; */
    margin-left: u(8);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    padding: u(6) u(10);
  }
  &-input{
    height: 100%;
  }
}
</style>
