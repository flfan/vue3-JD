<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <div class="nearby_items">
      <router-link v-for="item in nearbyList" :key="item._id" :to="`/shop/${item._id}`">
        <ShopInfo :item="item"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request.js'

import ShopInfo from '../../components/shopInfo.vue'

const useNearbyListEffect = () => {
  const nearbyList = ref([])

  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }

  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
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

  a{
    color: $medium-fontColor;
    text-decoration: none;
  }
}
</style>
