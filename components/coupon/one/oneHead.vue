<template>
  <div class="one_head">
    <div class="goods-logo">
      <img :src="pic" :alt="name">
    </div>
    <div class="goods-info">
      <div class="goods-title">{{name}}</div>
      <div class="goods-cost">{{cost}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pic: String,
    name: String,
    cost: String
  }
};
</script>
<style lang="scss" scoped>
.one_head {
  display: flex;
  /* justify-content: space-between; */
  box-sizing: border-box;
  padding: u(20) u(10);
  overflow: hidden;
  background-color: #f9f9f9;
  background-image: url(//res.smzdm.com/mobile/wap_v2/dist/img/head-bg.png);
  background-repeat: no-repeat;
  background-position: 105% u(20);
  background-size: contain;
  border-bottom: 4px dashed #f9f9f9;
}
.goods {
  &-logo {
    width: u(140);
    overflow: hidden;
    border-radius: u(6);
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-info {
    box-sizing: border-box;
    margin-left: u(20);
  }
  &-title {
    color: #555;
    font-size: u(16);
    margin-bottom: u(16);
  }
  &-cost {
    color: #ee4300;
    font-size: u(20);
  }
}
</style>
