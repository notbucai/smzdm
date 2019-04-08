<template>
  <div class>
    <!-- 首页banner -->
    <banner :list="bannerList"/>
    <!-- 首页商品列表 -->
    <p-list :list="pData.list" :type="pData.type"/>
    <!-- 底部加载 -->
    <list-loading v-if="this.loadObj.loading"/>
  </div>
</template>

<script>
import Banner from "@/components/index/banner/index.vue";
import PList from "@/components/index/pList/index.vue";
import ListLoading from "@/components/public/loading/List.vue";

export default {
  name: "home",
  created() {
    // 重置 滚动事件
    this.$scrollEvent.reset();
    setTimeout(() => {
      // 延时绑定自己的处理函数
      this.$scrollEvent.use(this.handleBottomLoad);
    }, 500);
  },
  beforeDestroy(){
    this.$scrollEvent.reset();
  },
  data() {
    return {
      bannerList: [],
      pData: {
        type: 1,
        list: []
      },
      loadObj: {
        loading: false
      }
    };
  },
  async asyncData({ app }) {
    const bannerList = await app.$axios.get("/api/index/banner");
    const pData = await app.$axios.get("/api/pList");
    return { bannerList, pData };
  },
  components: {
    Banner,
    PList,
    ListLoading
  },
  methods: {
    handleBottomLoad(event) {
      // 无限滚动
      const { scrollHeight, scrollTop, clientHeight } = event.target;
      const curr_height = scrollHeight - scrollTop - clientHeight;
      if (curr_height > 50) {
        return;
      }
      if (!this.loadObj.loading) {
        this.loadObj.loading = true;
        setTimeout(async () => {
          const pData = await this.$axios.get("/api/pList");
          this.pData.list = [...this.pData.list, ...pData.list];
          this.loadObj.loading = false;
        }, 800);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
