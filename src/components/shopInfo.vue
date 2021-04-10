<template>
  <div class="nearby_item">
    <img class="item_img" :src="item.imgUrl" :alt="item.name" />
    <div :class="{ item_info: true, 'shop__content--bordered': hideBorder }">
      <div class="item_name">{{ item.name }}</div>
      <div class="item_tags">
        <div class="item_tag">月售: {{ item.sales }}</div>
        <div class="item_tag">起送: {{ item.expressLimit }}</div>
        <div class="item_tag">基础运费: {{ item.expressPrice }}</div>
      </div>
      <div class="item_highlight">{{ item.slogan }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    item: {
      type: Object,
      required: true
    },
    hideBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.nearby_item {
  display: flex;
  margin-bottom: 0.12rem;
  .item_img {
    width: 0.56rem;
    height: 0.56rem;
  }
  .item_info {
    flex: 1;
    margin-left: 0.16rem;
    border-bottom: 1px $content-bgColor solid;
    &.shop__content--bordered {
      border: none;
    }
    .item_name {
      font-size: 0.16rem;
      margin-bottom: 0.08rem;
    }
    .item_tags {
      display: flex;
      margin-bottom: 0.08rem;
      font-size: 0.13rem;
      .item_tag {
        margin-right: 0.16rem;
      }
    }
    .item_highlight {
      color: #e93b3b;
      font-size: 0.13rem;
      margin-bottom: 0.12rem;
    }
  }
}
</style>
