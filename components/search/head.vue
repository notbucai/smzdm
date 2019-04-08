<template>
  <div class="head_wrap">
    <div class="head">
      <div class="search-back" @click="hanleGoBack">
        <i class="iconfont">&#xe624;</i>
      </div>
      <div class="search-input">
        <input
          type="text"
          placeholder="请输入搜索内容"
          v-model="value"
          :autofocus="isfocus"
          v-on:focus="handleFocus"
        >
      </div>
      <div class="search-btn" @click="handleGoSearch">搜索</div>
    </div>
    <div class="search-list" v-if="isfocus">
      <nuxt-link
        v-for="(item,index) in list"
        :key="index"
        :to="`?key=${encodeURI(item)}`"
        class="search-list-item"
      >{{item}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHead",
  props: {
    list: Array,
    isfocus: Boolean,
    keyVal: String
  },
  mounted() {
    this.value = this.keyVal;
  },
  data() {
    return {
      value: "",
      timer: 0
    };
  },
  watch: {
    value() {
      this.handleGetList();
    }
  },
  methods: {
    handleGetList() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$emit("change", this.value);
      }, 200);
    },
    handleFocus() {
      if (this.value) {
        this.handleGetList();
      }
    },
    hanleGoBack() {
      this.$router.back();
    },
    handleGoSearch() {
      if (this.value) {
        this.$router.push("?key=" + this.value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.head_wrap {
  position: relative;
}
.head {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: u(6) u(10);
  border-bottom: u(1) solid #f9f9f9;
  /* background: #ccc; */
}
.search {
  &-back,
  &-btn {
    font-size: u(14);
    color: #555;
    text-align: center;
    width: u(30);
  }
  &-back {
    font-size: u(16);
  }
  &-btn {
    width: u(40);
    text-align: left;
  }
  &-input {
    flex-grow: 1;
    box-sizing: border-box;
    margin: 0 u(10);
    input {
      box-sizing: border-box;
      overflow: hidden;
      padding: u(4) u(14);
      width: 100%;
      height: u(30);
      border-radius: u(20);
      border: none;
      outline: none;
      background-color: #f9f9f9f9;
      &::placeholder {
        color: #aaa;
      }
    }
  }
  &-list {
    position: fixed;
    z-index: 20;
    top: u(44);
    left: 0;
    right: 0;
    bottom: 0;
    /* width: 100%; */
    background: #fff;
    box-sizing: border-box;
    &-item {
      box-sizing: border-box;
      display: block;
      width: 100%;
      padding: 0 u(20);
      line-height: u(36);
      border-bottom: 1px solid #f9f9f9;
      text-decoration: none;
      color: #444;
      font-size: u(14);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
