<template>
  <div class="list">
    <p-item v-for="(item) in list" v-bind="item" :key="item.id"/>
  </div>
</template>

<script>
import PItem from "@/components/index/pItem/strip.vue";
export default {
  name: "searchList",
  props: { list: Array },
  components: {
    PItem
  }
};
</script>

<style lang="scss" scoped>
.list{
  overflow-y: auto;
  overflow-x: hidden;
  height: u(600);
}
</style>
