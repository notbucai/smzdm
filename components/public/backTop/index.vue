<template>
  <div class="back_top" v-on:click="handleBackTop" v-show="isShow">
    <i class="iconfont">&#xe7de;</i>
  </div>
</template>

<script>
export default {
  props: {
    el: Element
  },
  data() {
    return {
      flag: false,
      isShow: false
    };
  },
  created() {
    this.$nextTick(() => {
      this.el.addEventListener("scroll", e => {
        if (e.target.scrollTop >= e.target.clientHeight * 1.2) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      });
    });
  },
  methods: {
    handleBackTop() {
      if (this.flag) return;

      this.flag = true;
      let topLen = this.el.scrollTop / 40;
      const timer = setInterval(() => {
        topLen -= 1;
        if (topLen <= 40) {
          topLen = 40;
        }
        const st = (this.el.scrollTop -= topLen);
        if (st <= topLen) {
          this.el.scrollTop = 0;
          clearInterval(timer);
          this.flag = false;
        }
      }, 30);
    }
  }
};
</script>

<style lang="scss" scoped>
.back_top {
  position: fixed;
  right: u(26);
  bottom: u(50);
  background-color: #fff;
  box-shadow: 0 0 8px #aaaa;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: u(34);
  height: u(34);
  border-radius: 50%;
  transition: all .4s;
  .iconfont {
    font-size: u(16);
    font-weight: 800;
    color: #f0484899;
  }
}
</style>
