<template>
  <div class="one_warp">
    <one-head v-bind="data.goods"/>
    <one-body v-bind="data"/>
    <div class="one-foot">
      <span>已领{{data.clickNum}}张</span>
      <button class="btn">立刻兑换</button>
    </div>
  </div>
</template>

<script>
import OneHead from "@/components/coupon/one/oneHead.vue";
import OneBody from "@/components/coupon/one/oneBody.vue";
export default {
  name: "OneCoupon",
  async asyncData({ app, params }) {
    const id = params.id;
    const data = await app.$axios.get("/api/coupon/getById?id=" + id);

    return {
      data
    };
  },
  components: {
    OneHead,
    OneBody
  },
  data() {
    return {
      data: {
        goods: {},
        title: "",
        type: "",
        date: "",
        content: "",
        clickNum: 123
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.one_warp {
  background-color: #fff;
  min-height: u(400);
}
.one-foot {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: u(40);
  line-height: u(40);
  color: #555;
  font-size: u(14);
  text-align: center;
  background-color: #f9f9f9;
  border-top: 1px solid #f0f0f0;
  .btn {
    position: absolute;
    right: u(16);
    top: u(6);
    padding: u(4) u(10);
    font-size: u(14);
    border-radius: 40px;
    color: #fff;
    background: #f04848;
    border: none;
  }
}
</style>
