<template>
  <div class="head" :style="{backgroundImage:`url(${pic})`}">
    <!-- 分类的头部 -->
    <main class="card">
      <!-- 分类图片 -->
      <div class="card-pic">
        <img :src="pic" alt>
      </div>
      <!-- 分类标题 -->
      <div class="card-detail">
        <!-- 分类标题 -->
        <div class="card-title">
          {{name}}
          <span>分类</span>
        </div>
        <div class="card-info">
          <!-- 关注 -->
          <button class="card-btn">关注</button>
          <!-- 关注人数 -->
          <span>{{focusNum}}人关注</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "classifyHead",
  props: {
    id: [Number, String],
    name: String,
    pic: String,
    focusNum: [String, Number]
  }
};
</script>

<style lang="scss" scoped>
.head {
  position: relative;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: u(200);
  background-color: #fff;
  margin-bottom: u(36);
}
.card {
  position: absolute;
  bottom: u(-30);
  left: 50%;
  width: u(320);
  height: u(110);
  box-sizing: border-box;
  overflow: hidden;
  margin-left: u(-160);
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 0 u(8) #ccc;
  border-radius: u(2);
  &-pic {
    width: u(80);
    height: u(80);
    margin: 0 u(16);
    img {
      height: 100%;
      width: 100%;
    }
  }
  &-detail {
    height: 100%;
    padding: u(18) 0;
    box-sizing: border-box;
  }
  &-title {
    font-size: u(16);
    span {
      margin-left: u(10);
      font-size: u(10);
      border: u(1) solid #f0f0f0;
      padding: 0 u(2);
      color: #888;
    }
  }
  &-info {
    margin-top: u(30);
    font-size: u(14);
    span {
      color: #999;
      margin-left: u(10);
    }
  }
  &-btn {
    text-decoration: none;
    background-color: #f04848;
    color: #fff;
    font-size: u(14);
    padding: u(2) u(10);
    border-radius: u(20);
    border: none;
    outline: none;
  }
}
</style>
