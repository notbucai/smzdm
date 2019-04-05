<template>
  <div class="bannerWrapper">
    <Swiper class="banner" :autoPlay="true" :showIndicator="true">
      <Slide v-for="(item) in list" :key="item.id" class="banner-item">
        <nuxt-link :to="`/coupon/${item.id}`">
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
  box-sizing: border-box;
  padding: u(16) u(14);
  overflow: hidden;
  .banner,
  .wh_swiper {
    border-radius: 4px 4px 0 0;
    &-item {
      img {
        width: 100%;
        height: u(90);
      }
    }
  }
}
</style>
<style lang="scss">
.banner {
  .wh_indicator {
    width: auto;
    right: u(6);
    bottom: u(4);
    .wh_indicator_item {
      width: u(4);
      height: u(4);
      margin: 0 u(4);
      background-color: rgba(#fff, 0.6);
      &.wh_show_bgcolor {
        background-color: #fff;
      }
    }
  }
  .wh_slide {
    min-height: auto;
  }
}
</style>
