<script setup lang="ts">
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
  <div
    class="bg-accent grow flex items-center gap rounded-full px-4 focus-within:border focus-within:border-secondary overflow-clip transition-all"
    v-if="!isMobile"
  >
    <button>
      <SearchSVG class="w-6 h-6 opacity-40" />
    </button>
    <input
      type="text"
      placeholder="Pesquisar produtos..."
      class="py-3 pl-3 grow bg-accent outline-none"
    />
  </div>
</template>
