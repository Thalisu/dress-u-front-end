<script setup lang="ts">
import EmailSVG from '../svgs/EmailSVG.vue'
import { onMounted, ref, type VNodeRef } from 'vue'

const divRef: VNodeRef = ref(null)
const marginTop = ref(0)

const updateMargin = () => {
  marginTop.value = divRef.value.getBoundingClientRect().height / 2
}

onMounted(() => {
  if (!divRef.value) return

  updateMargin()

  window.addEventListener('resize', updateMargin)
})
</script>
<template>
  <div
    ref="divRef"
    class="relative bg-complement w-11/12 left-1/2 -translate-x-1/2 px-16 py-9 flex flex-wrap rounded-3xl justify-center gap-8"
    :style="{ marginTop: `-${marginTop}px` }"
  >
    <h2
      class="font-primary text-tertiary text-4xl font-bold max-w-[34rem] mr-auto ml-auto flex items-center"
    >
      RECEBA NOTICIAS SOBRE NOSSAS ULTIMAS OFERTAS
    </h2>
    <div class="flex flex-col gap-3 mr-auto ml-auto">
      <div class="flex font-medium text-primary bg-primary rounded-full px-4 py-3 gap-3">
        <EmailSVG class="h-6 w-6 opacity-40" />
        <input type="text" placeholder="Insira seu email" />
      </div>
      <button type="button" class="font-medium text-primary bg-primary rounded-full px-20 py-3">
        Inscreva-se na Newsletter
      </button>
    </div>
  </div>
</template>
