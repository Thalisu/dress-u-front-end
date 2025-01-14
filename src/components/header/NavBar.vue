<script setup lang="ts">
import OpenMenuSVG from '@/components/svgs/OpenMenuSVG.vue'
import { ref } from 'vue'

const toggleMenu = ref(false)

const toggle = () => {
  toggleMenu.value = !toggleMenu.value
}
</script>
<template>
  <nav class="flex h-12 items-center">
    <div class="relative mr-4 w-6 h-6 md:hidden">
      <button @click="toggle" class="w-6 h-6">
        <OpenMenuSVG class="w-6 h-6" />
      </button>
      <div
        class="absolute left-0 w-32 bg-primary rounded-lg font-medium shadow-xl"
        v-if="toggleMenu"
      >
        <ul class="flex gap-3 h-full flex-col px-2 py-3">
          <li class="flex items-center">
            <a href="#">Promoções</a>
          </li>
          <li class="flex items-center">
            <a href="#">Novidades</a>
          </li>
          <li class="flex items-center">
            <a href="#">Marcas</a>
          </li>
        </ul>
      </div>
    </div>
    <h1 class="font-primary text-2xl font-bold text-center block leading-none relative h-[1.4rem]">
      <span class="relative -top-[0.1578rem] left-0">DRESS.U</span>
    </h1>
    <ul class="gap-6 h-full ml-10 flex max-md:hidden">
      <li class="flex items-center"><a href="#">Promoções</a></li>
      <li class="flex items-center"><a href="#">Novidades</a></li>
      <li class="flex items-center"><a href="#">Marcas</a></li>
    </ul>
  </nav>
</template>
