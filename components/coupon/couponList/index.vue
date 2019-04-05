<template>
  <section class="coupon_list">
    <header class="coupon_list-header" ref="nav" :class="{top:isTop}">
      <nav class="coupon_list-nav">
        <span
          v-for="item in navs"
          :key="item.id"
          :class="{active:item.id == query.currentItemId}"
          v-on:click="handleChangeNav(item.id)"
        >{{item.name}}</span>
      </nav>
      <div class="coupon_list-screening" v-on:click="isScreen = true">
        筛选
        <i class="iconfont">&#xe62d;</i>
      </div>
    </header>
    <main class="coupon_list-main">
      <Coupont-item v-for="item in list" v-bind="item" :key="item.id"/>
    </main>
    <section class="coupon_list-screen" v-show="isScreen">
      <div class="coupon_list-screen-main">
        <div class="coupon_list-screen-item coupon_list-screen-sort">
          <h5>排序</h5>
          <ul>
            <li
              v-for="(_item,index) in sortList"
              :key="index"
              @click="handleChangeOptions({sortId:index})"
              :class="{active:c_query.sortId==index}"
            >{{_item}}</li>
          </ul>
        </div>
        <div class="coupon_list-screen-item coupon_list-screen-choose">
          <div v-for="(item,index) in options" :key="item.id">
            <h5>
              {{item.title}}
              <i
                class="iconfont"
                :class="{active:chooseFlags[index]}"
                v-on:click="handleChangeChoose(index)"
              >&#xe62d;</i>
            </h5>
            <ul :class="{active:chooseFlags[index]}">
              <li
                v-for="_item in item.list"
                :key="_item.id"
                @click="handleChangeOptions({currentoptionsId:_item.id})"
                :class="{active:c_query.currentoptionsId==_item.id}"
              >{{_item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="coupon_list-screen-footer">
        <div class="coupon_list-screen-footer-close" v-on:click="isScreen = false">
          <i class="iconfont">&#xe62c;</i>
        </div>
        <div class="coupon_list-screen-footer-reset" @click="handleReQuery">重置</div>
        <div class="coupon_list-screen-footer-yes" @click="handleQueryOk">确定</div>
      </div>
    </section>
  </section>
</template>

<script>
import CoupontItem from "@/components/coupon/couponItem/index.vue";
export default {
  name: "couponList",
  created() {},
  props: {
    isTop: Boolean,
    query: {
      type: Object,
      default: {
        currentItemId: 0,
        currentoptionsId: 0,
        sortId: 0
      }
    },
    list: Array,
    navs: Array,
    options: Array
  },
  mounted() {
    this.handleReQuery();
  },
  data() {
    return {
      isScreen: false,
      sortFlag: false,
      chooseFlags: [false, false, , false, false, false, false, false],
      sortList: ["综合排序", "最新", "最热"],
      c_query: {}
    };
  },
  created() {},
  components: { CoupontItem },
  methods: {
    handleChangeNav(id) {
      this.$emit("changeQuery", { currentItemId: id });
      this.c_query.currentItemId = id;
    },
    handleChangeChoose(index) {
      this.chooseFlags.splice(index, 1, !this.chooseFlags[index]);
    },
    handleChangeOptions({ currentoptionsId, sortId }) {
      currentoptionsId && (this.c_query.currentoptionsId = currentoptionsId);
      sortId && (this.c_query.sortId = sortId);
    },
    handleQueryOk() {
      this.$emit("changeQuery", { ...this.c_query });
      this.isScreen = false;
    },
    handleReQuery() {
      this.c_query = { ...this.query };
    }
  }
};
</script>

<style lang="scss" scope>
.coupon_list {
  margin-top: u(8);
  position: relative;
  overflow: hidden;
  &-header {
    position: absolute;
    background-color: #fff;
    height: u(36);
    width: 100%;
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    border-bottom: 1px solid #f0f0f0;
    &.top {
      position: fixed;
      z-index: 10;
      top: u(82);
    }
  }
  &-nav {
    box-sizing: border-box;
    width: u(290);
    height: 100%;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    > span {
      display: flex;
      align-items: center;
      height: 100%;
      /* margin: 0 u(10); */
      margin-right: u(10);
      padding: 0 u(10);
      font-size: u(14);
      color: #666;
      &.active {
        color: #f04848;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0%;
          width: 100%;
          height: u(2);
          background: #f04848;
        }
      }
    }
  }
  &-screening {
    /* position: absolute; */
    width: u(70);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: u(12);
    font-weight: 400;
    color: #999;
    background-color: #f0f0f0;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: u(2);
      top: 0;
      width: u(1);
      height: 100%;
      background: #f0f0f0;
      box-shadow: -4px 0 6px #666a;
    }
    .iconfont {
      font-size: u(12);
      margin-left: u(4);
    }
  }
  &-main {
    margin-top: u(36);
    min-height: u(1000);
  }
  &-screen {
    position: fixed;
    z-index: 20;
    top: u(84);
    bottom: u(50);
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    &-main {
      overflow-y: auto;
      height: 100%;
      overflow-x: hidden;
      box-sizing: border-box;
    }
    &-sort {
      border-bottom: u(6) solid #f0f0f0;
      min-height: u(100);
    }
    &-footer {
      position: fixed;
      display: flex;
      bottom: 0;
      height: u(50);
      width: 100%;
      background: #fff;
      border-top: u(1) solid #f9f9f9;
      > div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: u(14);
      }
      &-close {
        padding: 0 u(18);
        box-sizing: border-box;
        background-color: #fff;
        .iconfont {
          color: #f04848;
          font-size: u(20);
        }
      }
      &-reset {
        flex: 1;
        background-color: #f0f0f0;
        color: #f04848;
      }
      &-yes {
        flex: 1;
        color: #fff;
        background-color: #f04848;
      }
    }
    &-choose {
      > div:first-child {
        border-bottom: u(1) solid #f0f0f0;
        margin-bottom: u(10);
        padding-bottom: u(10);
      }
    }
    &-item {
      overflow: hidden;
      padding: u(10);
      box-sizing: border-box;
      h5 {
        color: #333;
        font-size: u(14);
        line-height: 2;

        .iconfont {
          float: right;
          color: #999;
          transition: all 0.2s;
          &.active {
            color: #f04848;
            transform: rotate(180deg);
          }
        }
      }
      ul {
        overflow: hidden;
        margin-right: u(-10);
        margin-left: u(-10);
        max-height: u(80);
        &.active {
          height: auto;
          max-height: unset;
        }
        li {
          float: left;
          width: u(100);
          margin: u(6) u(10);
          text-align: center;
          color: #999;
          border: u(1) solid #f0f0f0;
          font-size: u(12);
          padding: u(4) 0;
          box-sizing: border-box;
          border-radius: u(4);
          &.active {
            border-color: #f04848;
            color: #f04848;
          }
        }
      }
    }
  }
}
</style>
