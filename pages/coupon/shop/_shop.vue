<template>
  <section class="shop">
    <Coupont-item v-for="item in couponList" v-bind="item" :key="item.id"/>
    <list-loading v-if="this.loadObj.loading"/>
  </section>
</template>

<script>
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
