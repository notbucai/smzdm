<template>
  <div class="me-inputWrapper">
    <i class="iconfont me-inputWrapper-icon">&#xe7da;</i>
    <input type="text" class="me-inputWrapper-input" placeholder="搜索分类/品牌/商品">
    <div class="input-mark" v-if="isMark"></div>
  </div>
</template>

<script>
export default {
  props: {
    // 是否遮罩
    isMark: Boolean
  }
};
</script>

<style lang="scss" scoped>
.me-inputWrapper {
  background-color: #f9f9f9;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: u(40);
  box-sizing: border-box;
  overflow: hidden;
  border-radius: u(30);
  &-icon {
    z-index: 1;
    position: absolute;
    left: u(10);
    color: #bbb;
    font-size: u(16);
  }
  &-input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    padding-left: u(30);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #555;
    outline: none;
    font-size: u(14);
    &::placeholder {
      color: #bbb;
    }
  }
  .input-mark {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
}
</style>
