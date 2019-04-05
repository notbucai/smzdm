<template>
  <div class="bannerWrapper">
    <Swiper class="banner" :autoPlay="true" :showIndicator="false">
      <Slide v-for="(item) in list" :key="item.id" class="banner-item">
        <nuxt-link :to="`/p/${item.id}`">
          <img :src="item.pic" :alt="item.title">
        </nuxt-link>
      </Slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, Slide } from "vue-swiper-component";
export default {
  components: {
    Swiper,
    Slide
  },
  props: {
    list: {
      default: [],
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.bannerWrapper {
  width: 100vw;
  overflow: hidden;
  .banner,
  .wh_swiper {
    &-item {
      img {
        width: 100%;
        height: u(160);
      }
    }
  }
}
</style>
