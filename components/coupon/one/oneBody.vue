<template>
  <div class="body-warp">
    <div class="market-info">
      <div class="market-title">{{title}}</div>
      <div class="market-detail">
        <p>领取条件: {{type}}</p>
        <p>结束时间: {{date}}</p>
      </div>
    </div>
    <div class="market-main">
      <div class="market-title">兑换说明</div>
      <div class="market-detail" v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    date: String,
    content: String
  }
};
</script>

<style lang="scss" scoped>
.body-warp {
  overflow: hidden;
  box-sizing: border-box;
  padding: u(10);
}
.market {
  &-info {
    margin-top: u(10);
  }
  &-title {
    font-size: u(16);
    color: #555;
    margin: u(18) 0;
  }
  &-detail {
    font-size: u(14);
    line-height: 1.8;
    color: #888;
    p {
      margin-bottom: u(8);
    }
  }
}
</style>
