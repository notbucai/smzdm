<template>
  <div id="search">
    <search-head
      @change="handleSearchInput"
      :list="s_res_list"
      :isfocus="isfocus"
      :keyVal="keyVal"
    />
    <search-list :list="s_list"/>
  </div>
</template>

<script>
import SearchHead from "@/components/search/head.vue";
import SearchList from "@/components/search/list.vue";

export default {
  name: "search",
  async asyncData({ app, params, query }) {
    const key = query.key;
    const data = {};
    if (key) {
      const s_list = await app.$axios.get("/api/search?key=" + key);
      data.s_list = s_list;
      data.isfocus = false;
      data.keyVal = key;
    }
    return {
      ...data
    };
  },
  data() {
    return {
      s_res_list: [],
      isfocus: true,
      s_list: [],
      keyVal: ""
    };
  },
  watch: {
    async $route() {
      const key = this.$route.query.key;
      if (key) {
        const s_list = await this.$axios.get("/api/search?key=" + key);
        this.s_list = s_list;
        this.isfocus = false;
        this.keyVal = key;
      }
    }
  },
  components: {
    SearchHead,
    SearchList
  },
  methods: {
    async handleSearchInput(value) {
      const s_res_list = await this.$axios.get(
        "/api/search/prompt?key=" + value
      );
      this.s_res_list = s_res_list;
      this.isfocus = true;
    }
  }
};
</script>

<style lang="scss" scoped>
#search {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
</style>
