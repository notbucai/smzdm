<template>
  <nuxt-link :to="`/p/${id}`">
    <div class="pItem">
      <div class="p-pic">
        <img :src="pic" :alt="title">
        <span class="p-pic-tag" v-if="tag" v-text="tag"></span>
      </div>
      <div class="p-main">
        <h5 class="p-title" v-text="title"></h5>
        <div class="p-info">
          <p class="p-info-money" v-text="moneyInfo"></p>
          <div class="p-info-other">
            <div class="p-info-other-left">
              <div class="p-info-other-source" v-if="source">
                <span class="p-info-other-source-name" v-text="source.name"></span>
                <span v-text="source.time"></span>
              </div>
              <div class="p-info-other-user" v-else-if="user">
                <img :src="user.pic" :alt="user.name">
                <span v-text="user.name"></span>
              </div>
            </div>
            <div class="p-info-other-right" v-if="other">
              <span>
                <i class="iconfont">&#xe7dc;</i>
                {{other.msgNum}}
              </span>
              <span>
                <i class="iconfont">&#xe7dd;</i>
                {{other.pNum}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "pItemStrip",
  created() {},
  props: {
    id: { type: [Number, String], required: true },
    tag: { type: String },
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
}
.pItem {
  padding: u(8);
  display: flex;
  background-color: #fff;
  margin-bottom: u(10);
  overflow: hidden;
  .p {
    &-pic {
      position: relative;
      min-width: u(100);
      min-height: u(100);
      max-width: u(100);
      max-height: u(100);
      border-radius: u(4);
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      &-tag {
        position: absolute;
        left: 0;
        top: 0;
        font-size: u(10);
        background: rgba($color: #f04848, $alpha: 0.7);
        border-radius: u(2);
        color: #fff;
        padding: 0 u(4);
      }
    }
    &-main {
      width: 100%;
      margin-left: u(10);
      padding: u(2) 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }
    &-title {
      color: #333;
      font-size: u(16);
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      /* autoprefixer: ignore next */
      -webkit-box-orient: vertical; // 关闭自动去除
      overflow: hidden;
      font-weight: 700;
    }
    &-info {
      &-money {
        font-size: u(14);
        color: #f04848;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: u(10);
      }
      &-other {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-left,
        &-right {
          font-size: u(10);
          color: #999;
          span {
            padding: 0 u(4);
          }
        }
        &-source {
          display: flex;
          align-items: center;

          &-name {
            border-right: 1px solid #ccc;
            display: inline-block;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: u(30);
            overflow: hidden;
          }
        }
        &-user {
          display: flex;
          align-items: center;
          span {
            font-size: 12px;
          }
          img {
            width: 18px;
            height: 18px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
