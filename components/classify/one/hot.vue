<template>
  <div class="hot_wrap">
    <div class="scroll">
      <nuxt-link v-for="item in list" :key="item.id" :to="`/p/${item.id}`" class="scroll-item">
        <div class="item-pic">
          <img :src="item.pic" :alt="item.title">
        </div>
        <div class="item-title">{{item.title}}</div>
        <p class="item-money">{{item.moneyInfo}}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    list: {
      default: [],
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.hot_wrap {
  /* background-color: #fff; */
}
.scroll {
  padding: 0 u(10);
  overflow-y: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  &-item {
    display: inline-block;
    box-sizing: border-box;
    overflow: hidden;
    height: u(200);
    width: u(142);
    margin: 0 u(2);
    padding: u(10);
    color: #333;
    background-color: #fff;
    border: u(1) solid #f9f9f9;
    box-shadow: 0 0 u(6) #eee8;
    text-decoration: none;
    font-size: u(14);
  }
  .item {
    &-pic {
      width: u(121);
      height: u(121);
      border-radius: u(4);
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-title {
      font-size: u(16);
      margin: u(10) 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-money {
      font-size: u(14);
      color: #f04848;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
