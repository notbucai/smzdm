<template>
  <div class="list">
    <p-item v-for="item in list" :key="item.id" v-bind="item"/>
  </div>
</template>

<script>
import PItem from "@/components/index/pItem/strip.vue";
export default {
  name: "classifyList",
  props: {
    list: Array
  },
  components: {
    PItem
  }
};
</script>
