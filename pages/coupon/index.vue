<template>
  <section class="coupon">
    <!-- 头部 -->
    <header class="coupon-header" ref="header">
      <banner :list="bannerList"/>
      <shop-list :list="shopList"/>
    </header>
    <!-- 优惠列表 -->
    <section ref="coupon_list">
      <coupon-list
        :navs="navs"
        :isTop="isTop"
        :list="couponList"
        :query="query"
        :options="couponOptions"
        @changeQuery="handleSwitchQuery"
      />
    </section>
    <!-- 无限加载 -->
    <list-loading v-if="this.loadObj.loading"/>
  </section>
</template>

<script>
import Banner from "@/components/coupon/banner/index.vue";
import ShopList from "@/components/coupon/shoplist/index.vue";
import CouponList from "@/components/coupon/couponList/index.vue";
import ListLoading from "@/components/public/loading/List.vue";

export default {
  name: "coupon",
  async asyncData({ app }) {
    const shopList = await app.$axios.get("/api/coupon/shoplist");
    const bannerList = await app.$axios.get("/api/coupon/banner");
    const navs = await app.$axios.get("/api/coupon/navs");
    const currentItemId = navs[0] && navs[0].id;

    return {
      shopList,
      bannerList,
      navs,
      query: {
        currentItemId,
        currentoptionsId: -1,
        sortId: 0
      }
    };
  },
  created() {
    this.$scrollEvent.reset();
    this.handleInitCouponListData();
    setTimeout(() => {
      this.$scrollEvent.use(this.handleBottomLoad);
    }, 500);
  },
  beforeDestroy() {
    this.$scrollEvent.reset();
  },
  components: {
    Banner,
    ShopList,
    CouponList,
    ListLoading
  },
  data() {
    return {
      isTop: false,
      shopList: [],
      bannerList: [],
      couponList: [],
      navs: [],
      couponOptions: [],
      query: {
        currentItemId: 0,
        currentoptionsId: -1,
        sortId: 0
      },
      loadObj: {
        loading: false
      }
    };
  },
  watch: {
    $route() {
      this.couponList = [];
      this.couponOptions = [];
      this.handleInitCouponListData();
      this.$scrollEvent.reset();
      this.$scrollEvent.use(this.handleBottomLoad);
    },
    query: {
      deep: true,
      handler() {
        this.$router.push({
          path: "",
          query: { ...this.query }
        });
      }
    }
  },
  methods: {
    async handleInitCouponListData() {
      const { currentItemId, currentoptionsId, sortId } = this.query;
      let query = `?currentItemId=${currentItemId}&sortId=${sortId}`;
      currentoptionsId != -1 &&
        (query += `&currentoptionsId=${currentoptionsId}`);

      const couponList = await this.$axios.get("/api/coupon/list" + query);
      const couponOptions = await this.$axios.get(
        "/api/coupon/options" + query
      );

      this.couponList = [...this.couponList, ...couponList];
      this.couponOptions = [...this.couponOptions, ...couponOptions];
    },
    handleNavToTop(event) {
      const { scrollHeight, scrollTop, clientHeight } = event.target;
      if (scrollTop >= this.$refs["header"].clientHeight + 6) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },
    handleCouponTop() {
      const app = document.querySelector("#app");
      const coupon_list = this.$refs["coupon_list"];
      app.scrollTop = coupon_list.offsetTop;
    },
    handleSwitchQuery({ currentItemId, sortId, currentoptionsId }) {
      currentItemId && (this.query.currentItemId = currentItemId);
      sortId && (this.query.sortId = sortId);
      currentoptionsId && (this.query.currentoptionsId = currentoptionsId);
    },
    handleBottomLoad(event) {
      const { scrollHeight, scrollTop, clientHeight } = event.target;

      const curr_height = scrollHeight - scrollTop - clientHeight;

      if (curr_height > 50) {
        return;
      }
      if (!this.loadObj.loading) {

        this.loadObj.loading = true;
        setTimeout(async () => {
          await this.handleInitCouponListData();
          this.loadObj.loading = false;
        }, 800);
      }
    }
  }
};
</script>

<style lang="scss" scope>
.coupon {
  &-header {
    background-color: #fff;
  }
}
</style>
