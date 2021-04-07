<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'Toast',
  props: ['message']
}

export const useToastEffect = () => {
  const toastData = reactive({
    toastMessage: '',
    toastShow: false
  })

  const showToast = (message) => {
    console.log('sdfasdfasdfsdfsdfsmessage')
    toastData.toastShow = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.toastShow = false
    }, 2000)
  }
  const { toastMessage, toastShow } = toRefs(toastData)
  return { showToast, toastMessage, toastShow }
}

</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: $bgColor;
}
</style>
