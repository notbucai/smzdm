<template>
  <div class="plist">
    <template v-if="type==1">
      <p-item-strip v-for="item in list" v-bind="item" :key="item.id"/>
    </template>
    <template v-else-if="type==2">
      <p-item-chunk v-for="item in list" v-bind="item" :key="item.id"/>
    </template>
  </div>
</template>

<script>
import PItemStrip from "../pItem/strip.vue";
import PItemChunk from "../pItem/chunk.vue";
export default {
  props: {
    list: Array,
    type: Number
  },
  created(){
  },
  components: {
    PItemStrip,
    PItemChunk
  }
};
</script>

<style lang="scss" scoped>
.plist {
  /* 123 */
  overflow: hidden;
  margin-top: u(10);
}
</style>
