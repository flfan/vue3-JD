<template>
  <div class="wrapper">
    <StaticPart />
    <div class="gap"></div>
    <Nearby />
  </div>
  <Docker />
</template>
<script>
import StaticPart from './staticPart.vue'
import Nearby from './nearby'
import Docker from './docker'
export default {
  name: 'home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0.5rem;
  left: 0;
  right: 0;

  padding: 0 0.18rem;
  box-sizing: border-box;
  margin-top: 0.16rem;
  // padding-bottom: .35rem;
  overflow-y: auto;
  .gap {
    height: 0.1rem;
    background-color: $content-bgColor;
    margin: 0 -0.18rem;
  }
}
</style>
