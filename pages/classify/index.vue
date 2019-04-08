<template>
  <div id="classify">
    <ul class="l_box">
      <li
        v-for="(item,index) in list"
        :key="item.id"
        :class="{active:currentIndex==index}"
        @click="handleChangeCurrendIndex(index)"
      >{{item.name}}</li>
    </ul>
    <div class="r_box">
      <nuxt-link :to="'/classify/'+list[0].id" class="level_one">
        全部
        <i class="iconfont right">&#xe65b;</i>
      </nuxt-link>

      <template v-if="list[0]">
        <div class="level_two" v-for="(item) in list[currentIndex].children" :key="item.id">
          <nuxt-link v-if="item.isUrl" class="level_one" :to="'/classify/'+item.id">
            <i class="iconfont right">&#xe65b;</i>
          </nuxt-link>
          <div v-else class="level_one">{{item.name}}</div>

          <div class="level_warp">
            <nuxt-link v-for="(_item) in item.children" :key="_item.id" :to="'/classify/'+_item.id">{{_item.name}}</nuxt-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Classify",
  async asyncData({ app }) {
    const list = await app.$axios.get("/api/classify");
    return {
      list
    };
  },
  data() {
    return {
      currentIndex: 0,
      list: []
    };
  },
  methods:{
    handleChangeCurrendIndex(index){
      this.currentIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
#classify {
  position: fixed;
  z-index: 999;
  top: u(46);
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
}
.l_box {
  text-align: center;
  box-sizing: border-box;
  width: u(90);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: u(1) solid #f0f0f0;
  > li {
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    font-size: u(14);
    height: u(38);
    line-height: u(38);
    color: #555;
    &.active {
      color: #fff;
      background-color: #f04848;
      box-shadow: inset 0 4px 8px 0 rgba(50, 50, 50, 0.1), inset 0 0 0 0 #000,
        inset 0 0 0 0 #000, inset 0 0 0 0 #000;
    }
  }
}
.r_box {
  position: absolute;
  top: 0;
  left: u(90);
  right: 0;
  box-sizing: border-box;
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
}
.level_ {
  &one {
    border-bottom: u(1) solid #f0f0f0;
    padding-left: u(20);
    height: u(40);
    line-height: u(40);
    font-size: u(12);
    color: #444;
    display: block;
    text-decoration: none;
    > .right {
      float: right;
      padding-right: u(20);
    }
  }
  &two {
    box-shadow: inset 0 4px 8px 0 rgba(50, 50, 50, 0.1), inset 0 0 0 0 #000,
      inset 0 0 0 0 #000, inset 0 0 0 0 #000;
  }
  &warp {
    box-sizing: border-box;
    border-bottom: u(1) solid #f0f0f0;
    padding: u(10) u(20);
    overflow: hidden;
    a {
      font-size: u(12);
      color: #555;
      text-decoration: none;
      border: u(1) solid #f0f0f0;
      padding: u(4) u(10);
      border-radius: u(4);
      margin-bottom: u(10);
      float: left;
      margin-right: u(10);
    }
  }
}
</style>


