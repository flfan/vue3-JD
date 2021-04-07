<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <div class="nearby_items">
      <div class="nearby_item" v-for="(item, index) in nearbyList" :key="index">
        <img
          class="item_img"
          :src="item.img"
          :alt="item.name"
        />
        <div class="item_info">
          <div class="item_name">{{item.name}}</div>
          <div class="item_tags">
            <div class="item_tag" v-for="el in item.tags" :key="el">{{el}}</div>
          </div>
          <div class="item_highlight">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      {
        img: 'http://www.dell-lee.com/imgs/vue3/near.png',
        name: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/near.png',
        name: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/near.png',
        name: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/near.png',
        name: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]

    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.nearby {
  margin-bottom: 0.16rem;
  color: $content-fontcolor;
  &_title {
    font-size: 0.18rem;
    margin-bottom: 0.14rem;
  }
  .nearby_items {
    & .nearby_item:last-child {
      margin-bottom: 0;
    }
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
  }
}
</style>
