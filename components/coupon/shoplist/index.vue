<template>
  <div class="shoplist">
    <div class="shoplist-title">
      <h2>热门商城</h2>
      <span v-on:click="handleChangeShopList">
        <i class="iconfont tra" ref="tra">&#xe653;</i> 换一批
      </span>
    </div>
    <main class="shoplist-main">
      <ul>
        <li class="shoplist-item" v-for="item in currentList" :key="item.id">
          <nuxt-link :to="`/coupon/shop/${item.id}`">
            <img :src="item.pic" :alt="item.name">
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    list: {
      default: [],
      type: Array,
      require: true
    }
  },
  data() {
    return {
      index: 0,
      len: 8
    };
  },
  computed: {
    currentList() {
      const len = this.len;
      const start = this.index * len;
      const cl = this.list.slice(start, start + len);
      return cl;
    }
  },
  methods: {
    handleChangeShopList() {
      this.index++;
      this.index %= Math.ceil(this.list.length / this.len);
      try {
        const tra = this.$refs["tra"];
        const curr_deg = parseInt(
          (tra.style.transform || "0").replace(/[^0-9]+/g, "")
        );
        tra.style.transform = `rotate(${curr_deg + 360}deg)`;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.shoplist {
  &-title {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 u(10);
    align-items: center;
    height: u(40);
    border-bottom: u(1) solid #f9f9f9;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      /* background-color: #f04848; */
      /* width: u(20); */
      /* height: u(20); */
      border: u(6) solid #f04848;
      border-bottom-color: transparent;
      border-right-color: transparent;
    }
    h2 {
      color: #888;
      font-size: u(14);
    }
    span {
      font-size: u(12);
      color: #f04848;
      .tra {
        transition: all 0.4s;
        display: inline-block;
      }
      .iconfont {
        font-size: u(10);
      }
    }
  }
  &-main {
    overflow: hidden;
  }
  &-item {
    float: left;
    width: 25%;
    height: u(46);
    box-sizing: border-box;
    border-right: 1px solid #f9f9f9;
    border-bottom: 1px solid #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    a {
      display: block;
      width: 70%;
      height: 70%;
      box-sizing: border-box;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
