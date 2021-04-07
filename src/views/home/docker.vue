<template>
  <div class="docker">
    <div
      :class="{docker_item: true,  'docker_item-active':index === 0 }"
      v-for="(item, index) in dockerList" :key="index"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker_item_title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe6f3;', text: '首页' },
      { icon: '&#xe7e5;', text: '购物车' },
      { icon: '&#xe61e;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]

    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.docker {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 0.5rem;
  border-top: 1px $content-bgColor solid;
  box-sizing: border-box;
  color: $content-fontcolor;
  background: #fff;

  &_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-active {
      color: #1fa4fc;
    }
    .iconfont {
      font-size: 0.2rem;
    }
    &_title {
      font-size: 0.1rem;
      margin: 0.02rem 0 0 0;
    }
  }
}
</style>
