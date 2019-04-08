<template>
  <div>
    <!-- 栏目列表 -->
    <PList :list="pData.list" :type="pData.type"/>
    <!-- 无限滚动 -->
    <list-loading v-if="this.loadObj.loading"/>
  </div>
</template>

<script>
// 每个栏目
import ListLoading from "@/components/public/loading/List.vue";
import PList from "@/components/index/pList/index.vue";
export default {
  scrollToTop: true,
  async asyncData({ app, params, query }) {
    const classify = params.classify;
    // 通过 nav 获取当前列表
    const pData = await app.$axios.get(`/api/pList?fenlei=${classify}`);
    return { pData };
  },
  components: { PList, ListLoading },
  data() {
    return {
      pData: {
        list: [],
        type: 1
      },
      loadObj: {
        loading: false
      }
    };
  },
  created() {
    // 重置 滚动事件
    this.$scrollEvent.reset();
    setTimeout(() => {
      // 绑定当前滚动事件
      this.$scrollEvent.use(this.handleBottomLoad);
    }, 500);
  },
  beforeDestroy(){
    this.$scrollEvent.reset();
  },
  watch: {
    $route() {
      this.$scrollEvent.reset();
      setTimeout(() => {
        this.$scrollEvent.use(this.handleBottomLoad);
      }, 500);
    }
  },
  methods: {
    handleBottomLoad(event) {
      // 无限加载 处理函数
      const { scrollHeight, scrollTop, clientHeight } = event.target;
      const curr_height = scrollHeight - scrollTop - clientHeight;
      if (curr_height > 50) {
        return;
      }
      if (!this.loadObj.loading) {
        this.loadObj.loading = true;
        setTimeout(async () => {
          const pData = await this.$axios.get(
            `/api/pList?fenlei=${this.$route.params.classify}`
          );
          this.pData.list = [...this.pData.list, ...pData.list];
          this.loadObj.loading = false;
        }, 800);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bannerWrapper {
}
</style>
