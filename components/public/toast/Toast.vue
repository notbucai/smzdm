<template>
  <transition name="toast">
    <div id="toast" v-if="isShow">
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      message: ""
    };
  },
  methods: {
    show({ message }) {
      this.message = message;
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
#toast {
  position: fixed;
  left: 0;
  bottom: u(60);
  width: 100%;
  text-align: center;
  span {
    text-align: center;
    padding: u(4) u(10);
    line-height: 1;
    font-size: u(12);
    border-radius: u(30);
    color: #ddd;
    background-color: rgba($color: #000000, $alpha: 0.6);
  }
}
.toast-enter-active,
.toast-leave-active {
  transition: all .5s;
}
// toast-leave-active toast-leave-to
.toast-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(u(60));
  opacity: 0;
}
.fade-leave,.toast-enter-to{
  transform: translateY(0);
  opacity: 1;
}
</style>
