<script setup lang="ts">
import casual from '@/assets/imgs/casual.png'
import formal from '@/assets/imgs/formal.png'
import festas from '@/assets/imgs/festas.png'
import treino from '@/assets/imgs/treino.png'
</script>
<template>
  <div class="pt-20 px-16 pb-16 bg-accent w-full flex rounded-3xl items-center flex-col">
    <h2 class="font-primary text-5xl font-bold pb-16">PROCURE POR ESTILO</h2>
    <div class="flex w-full gap-5 mb-5 flex-wrap md:flex-nowrap">
      <a href="" class="h-72 flex bg-primary relative p-9 rounded-3xl overflow-clip min-w-80 grow">
        <p class="z-50 font-bold text-4xl">Casual</p>
        <img :src="casual" alt="casual" class="absolute bottom-0 right-0 top-0" />
      </a>
      <a
        href=""
        class="h-72 flex relative p-9 rounded-3xl overflow-clip grow-[2] bg-[rgb(252,252,252)] min-w-80 w-full"
      >
        <p class="z-50 font-bold text-4xl">Formal</p>
        <img :src="formal" alt="casual" class="absolute top-0 right-0 h-full w-max object-cover" />
      </a>
    </div>
    <div class="flex w-full gap-5 flex-wrap md:flex-nowrap">
      <a
        href=""
        class="h-72 flex relative p-9 rounded-3xl overflow-clip grow-[2] bg-white min-w-80 w-full"
      >
        <p class="z-50 font-bold text-4xl">Festas</p>
        <img :src="festas" alt="festas" class="absolute top-0 right-0 h-full w-max object-cover" />
      </a>
      <a href="" class="h-72 flex bg-white relative p-9 rounded-3xl overflow-clip min-w-80 grow">
        <p class="z-50 font-bold text-4xl">Treino</p>
        <img :src="treino" alt="treino" class="absolute bottom-0 right-0 top-0" />
      </a>
    </div>
  </div>
</template>
