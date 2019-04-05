<template>
  <section class="coupon_item">
    <nuxt-link :to="`/coupon/${id}`">
      <div class="coupon_item-left">
        <div class="coupon_item-content">
          <div class="coupon_item-img">
            <img :src="pic" alt="title">
          </div>
          <div class="coupon_item-title">{{title}}</div>
        </div>
        <div class="coupon_item-info">{{info}}</div>
      </div>
      <div class="coupon_item-right">
        <div class="coupon_item-type">{{type}}</div>
        <div class="coupon_item-btn">
          <button :disabled="!status">兑换</button>
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: "couponItem",
  created() {},
  props: {
    id: [String, Number],
    pic: String,
    title: String,
    info: String,
    type: [String, Number],
    status: Boolean
  },
  mounted() {},
  data() {
    return {};
  },
  watch: {
    // TODO 触发页面更新
  },
  created() {},
  components: {},
  methods: {}
};
</script>

<style lang="scss" scope>
.coupon_item {
  a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-sizing: border-box;
    padding: u(10);
    height: u(100);
    margin-bottom: u(10);
  }
  &-left {
    flex-grow: 1;
    border-right: u(2) dashed #f0f0f0;
    padding-right: u(10);
    /* background: #abc; */
  }
  &-content {
    display: flex;
    align-items: center;
  }
  &-img {
    min-width: u(90);
    max-width: u(90);
    margin-right: u(20);
    img {
      width: 100%;
    }
  }
  &-title {
    color: #f04848;
    font-size: u(14);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
  }
  &-info {
    font-size: u(10);
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
  }
  &-right {
    min-width: u(80);
    /* background: #987; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-type {
    color: #f04848;
    font-size: u(14);
  }
  &-btn {
    margin-top: u(10);
    margin-left: u(10);
    button {
      background-color: #f04848;
      border: none;
      color: #fff;
      padding: u(4) u(18);
      border-radius: u(16);
      font-size: u(14);
      &:disabled {
        background-color: #aaa;
      }
    }
  }
}
</style>
