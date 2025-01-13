<script setup lang="ts">
import StarsSVG from './svgs/StarsSVG.vue'
import VerifiedSVG from './svgs/VerifiedSVG.vue'

defineProps({
  who: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="rounded-3xl flex-col flex gap-3 p-8 min-w-80 mb-10 border-2">
    <StarsSVG class="w-40" />
    <div class="flex gap-2 items-center">
      <span class="font-bold text-xl">{{ who }}</span>
      <VerifiedSVG class="w-6 h-6" />
    </div>
    <span class="font-normal opacity-60 max-w-96">{{ feedback }}</span>
  </div>
</template>
