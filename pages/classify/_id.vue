<template>
  <div class="calssifyOne">
    <classify-head :name="name" :id="id" :pic="pic" :focusNum="focusNum"/>
    <h3>单品推荐</h3>
    <classify-hot :list="hots"/>
    <h3>最新优惠</h3>
    <classify-list :list="list"/>
  </div>
</template>

<script>
import classifyHead from "@/components/classify/one/head.vue";
import classifyHot from "@/components/classify/one/hot.vue";
import classifyList from "@/components/classify/one/list.vue";
export default {
  name: "oneClassify",
  async asyncData({ app, params }) {
    const data = await app.$axios.get("/api/classify/getById");
    return { ...data };
  },
  data() {
    return {
      id: "@id",
      name: "@county",
      pic: "@image(200x200)",
      focusNum: 0,
      hots: [],
      list: []
    };
  },
  components: {
    classifyHead,
    classifyHot,
    classifyList
  }
};
</script>

<style lang="scss" scoped>
.calssifyOne {
  h3 {
    color: #444;
    font-size: u(12);
    margin: u(6) u(20);
  }
  &-item {
  }
}
</style>
