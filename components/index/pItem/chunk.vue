<template>
  <nuxt-link :to="`/p/${id}`">
    <div class="pItem">
      <div class="p-pic">
        <img :src="pic" :alt="title">
        <span class="p-pic-time" v-text="source.time"></span>
      </div>
      <div class="p-main">
        <h5 class="p-title" v-text="title"></h5>
        <p class="p-money" v-text="moneyInfo"></p>
        <div class="p-info">
          <p>{{source.name || user.name}}</p>
          <p>
            <i class="iconfont">&#xe7dc;</i>
            {{other.msgNum}}
          </p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "pItemChunk",
  created() {},
  props: {
    id: { type: [Number, String], required: true },
    title: { type: String, required: true },
    pic: { type: String },
    moneyInfo: { type: String },
    source: { type: Object },
    user: { type: Object },
    other: { type: Object }
  },
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
a {
  -webkit-tap-highlight-color: rgba($color: #fff, $alpha: 0.6);
  -webkit-touch-callout: none;
  color: #333;
  text-decoration: none;
  box-sizing: border-box;
  width: 50%;
  float: left;
  display: block;
  padding: u(8);
  background-color: #fff;
  /* margin-top: u(10); */
  border-bottom: 1px solid #f0f0f0;

  &:nth-child(odd) {
    border-right: 1px solid #f0f0f0;
  }
}
.pItem {
  overflow: hidden;
  box-sizing: border-box;
  .p {
    &-pic {
      position: relative;
      width: 100%;
      height: u(160);
      border-radius: u(4);
      overflow: hidden;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
      }
      &-time {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: u(10);
        background: rgba($color: #fff, $alpha: 0.9);
        border-radius: u(2);
        color: #aaa;
        padding: 0 u(4);
      }
    }
    &-main {
      width: 100%;
      overflow: hidden;
    }
    &-money {
      font-size: u(12);
      color: #f04848;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin: u(12) 0;
    }
    &-title {
      color: #333;
      font-size: u(16);
      text-overflow: ellipsis;
      display: -webkit-box;
      height: u(40);
      -webkit-line-clamp: 2;
      /* autoprefixer: ignore next */
      -webkit-box-orient: vertical; // 关闭自动去除
      overflow: hidden;
      font-weight: normal;
    }
    &-info {
      display: flex;
      font-size: u(10);
      justify-content: space-between;
    }
  }
}
</style>
