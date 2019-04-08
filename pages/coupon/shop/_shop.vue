<template>
  <section class="shop">
    <!-- 优惠券列表 -->
    <Coupont-item v-for="item in couponList" v-bind="item" :key="item.id"/>
    <!-- 无线加载 -->
    <list-loading v-if="this.loadObj.loading"/>
  </section>
</template>

<script>
// 每个商城对应的列表 如 京东优惠券 淘宝优惠券
import CoupontItem from "@/components/coupon/couponItem/index.vue";
import ListLoading from "@/components/public/loading/List.vue";

export default {
  name: "coupon",
  async asyncData({ app, route }) {
    const couponList = await app.$axios.get("/api/coupon/list");
    return {
      couponList
    };
  },
  created() {
    this.$scrollEvent.reset();
    setTimeout(() => {
      this.$scrollEvent.use(this.handleBottomLoad);
    }, 500);
  },
  beforeDestroy() {
    // this.$scrollEvent.reset();
  },
  components: { CoupontItem, ListLoading },
  data() {
    return {
      couponList: [],
      loadObj: {
        loading: false
      }
    };
  },
  methods: {
    // 无限滚动
    handleBottomLoad(event) {
      const { scrollHeight, scrollTop, clientHeight } = event.target;
      const curr_height = scrollHeight - scrollTop - clientHeight;
      if (curr_height > 50) {
        return;
      }
      if (!this.loadObj.loading) {
        this.loadObj.loading = true;
        setTimeout(async () => {
          const couponList = await this.$axios.get("/api/coupon/list");

          this.couponList = [...this.couponList, ...couponList];
          this.loadObj.loading = false;
        }, 800);
      }
    }
  }
};
</script>

<style lang="scss" scope>
</style>
