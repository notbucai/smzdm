<template>
  <div class="p_id">
    <div class="p-pic">
      <img :src="pic" alt>
    </div>
    <main class="p-main">
      <div class="p-source">
        <span>{{source.name}}</span>
        <span>{{source.date}}</span>
      </div>
      <h1 class="p-title">{{title}}</h1>
      <div class="p-price">{{price}}</div>
      <div class="p-content" v-html="content"></div>
    </main>

    <div class="p-praise">
      <div class="praise-item" @click="handlePraise('yes')">
        <i class="iconfont">&#xe614;</i>
        <span>{{praise.yes}}</span>
      </div>
      <div class="praise-item" @click="handlePraise('no')">
        <i class="iconfont">&#xe634;</i>
        <span>{{praise.no}}</span>
      </div>
    </div>
    <div class="p-footTools">
      <p class="footTools-info">
        <span>偷偷告诉你 点击右边按钮 可以领取哦</span>
      </p>
      <a :href="link" target="_blank" class="footTools-right">直达连接</a>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const data = await app.$axios.get("api/p/getById?id=" + params.id);
    return {
      ...data
    };
  },
  data() {
    return {
      title: "@title",
      pic: "@image(400x200)",
      source: {
        name: "@county",
        date: "@time"
      },
      price: "@csentence",
      content:
        "<h2> @csentence </h2><p> @cparagraph </p><p> @cparagraph </p><p> @cparagraph </p><p> @cparagraph </p><p> @cparagraph </p>",
      praise: {
        yes: "@integer(0,30)",
        no: "@integer(0,30)"
      },
      link: "@url"
    };
  },
  methods: {
    async handlePraise(flag) {
      const id = this.$route.params.id;
      const message = await this.$axios.post("/api/p/praise", {
        id
      });
      this.$toast({ message });
      if (message == "成功") {
        if (flag == "yes") {
          this.praise.yes += 1;
        } else if (flag == "no") {
          this.praise.no -= 1;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.p_id {
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  /* padding: 0 u(20); */
  background-color: #fff;
  padding-bottom: u(100);
}
.p {
  &-main {
    padding: 0 u(20);
    overflow: hidden;
    box-sizing: border-box;
  }
  &-pic {
    width: 100%;
    height: u(180);
    text-align: center;
    img {
      height: 100%;
    }
  }
  &-source {
    margin-top: u(10);
    span {
      border-right: 1px solid #999;
      line-height: 0;
      font-size: u(10);
      padding-right: u(6);
      color: #999;
    }
  }
  &-title {
    margin-top: u(10);
    font-size: u(18);
    color: #333;
  }
  &-price {
    margin-top: u(5);
    font-size: u(18);
    color: #f04848;
  }
  &-content {
    margin-top: u(18);
    font-size: u(14);
    color: #444;
    p {
      line-height: 1.6;
      margin-bottom: u(10);
    }
  }
  &-praise {
    border-top: u(6) solid #f0f0f0;
    padding: u(20) 0;
    margin-top: u(20);
    display: flex;
    justify-content: space-around;
    .praise {
      &-item {
        width: u(100);
        box-sizing: border-box;
        padding: u(8) 0;
        text-align: center;
        border: u(1) solid #ddd;
        &:first-child {
          color: #f04848;
        }
        .iconfont {
          font-size: u(18);
        }
        span {
          font-size: u(12);
        }
      }
    }
  }
  &-footTools {
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: u(40);
    background-color: #f9f9f9;
    border-top: u(1) solid #f0f0f0;
    box-shadow: u(4) 0 u(8) rgba($color: #ddd, $alpha: 0.5);
    .footTools {
      &-info {
        padding-left: u(20);
        float: left;
        font-size: u(12);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #aaa;
      }
      &-right {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        float: right;
        width: u(90);
        height: 100%;
        color: #fff;
        font-size: u(14);
        text-decoration: none;
        background-color: #f04848;
        &::after {
          content: "";
          position: absolute;
          left: u(-26);
          height: u(34);
          width: u(34);
          background-color: #f9f9f9;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.p-content {
  p {
    line-height: 1.8;
    margin-bottom: u(10);
  }
}
</style>