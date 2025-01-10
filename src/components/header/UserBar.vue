<script lang="ts" setup>
import CartSVG from '../svgs/CartSVG.vue'
import UserSVG from '../svgs/UserSVG.vue'
import { isWidthLessThan } from '@/utils'
import { onMounted, ref } from 'vue'
import SearchSVG from '../svgs/SearchSVG.vue'

const isMobile = ref(false)

const updateStyle = () => {
  if (isWidthLessThan(400)) {
    isMobile.value = true
  } else {
    isMobile.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', updateStyle)
})
</script>
<template>
  <div class="flex gap-4">
    <div v-if="isMobile" class="relative w-6 h-6">
      <button>
        <SearchSVG class="w-6 h-6" />
      </button>
    </div>
    <CartSVG class="w-6 h-6" />
    <UserSVG class="w-6 h-6" />
  </div>
</template>
