<script lang="ts" setup>
import { isWidthLessThan } from '@/utils'
import { onMounted, reactive, type CSSProperties } from 'vue'

const containerStyle: CSSProperties = reactive({ aspectRatio: '16/9', flexDirection: 'row' })
const textContainerStyle: CSSProperties = reactive({ width: '35rem' })
const buttonStyle: CSSProperties = reactive({ width: 'max-content' })
const heroSectionPic = new URL('../../assets/imgs/heroSectionPic.png', import.meta.url).href

const updateStyle = () => {
  if (!isWidthLessThan(800)) {
    containerStyle.aspectRatio = '16/9'
    containerStyle.flexDirection = 'row'
    buttonStyle.width = 'max-content'
    textContainerStyle.width = '35rem'
  } else {
    textContainerStyle.width = '100%'
    containerStyle.aspectRatio = '9/16'
    containerStyle.flexDirection = 'column'
    buttonStyle.width = '100%'
  }
}

onMounted(() => {
  updateStyle()
  window.addEventListener('resize', updateStyle)
})
</script>
<template>
  <div class="bg-tertiary w-svw flex justify-center px-4 overflow-hidden">
    <div
      class="w-full max-w-max flex gap-4 overflow-clip items-start max-h-[70svh]"
      :style="containerStyle"
    >
      <div class="flex flex-col pt-10 gap-8 h-fit mr-auto" :style="textContainerStyle">
        <h2 class="font-primary text-6xl font-bold">Encontre roupas que fazem seu estilo</h2>
        <p class="text-secondary font-normal">
          Uma quantidade diversa de roupas de altissima qualidade, feitas para trazer a sua
          individualidade e atender o seu estilo
        </p>
        <button
          class="font-medium text-tertiary bg-complement py-4 px-12 rounded-full"
          :style="buttonStyle"
        >
          Compre Agora
        </button>
        <div class="flex pt-4 pb-10 mr-auto ml-auto">
          <div class="flex flex-col gap-2 pr-5">
            <span class="font-bold text-4xl">200+</span>
            <p class="font-normal text-secondary">Marcas Internacionais</p>
          </div>
          <div class="flex flex-col gap-2 px-5 border-x-2">
            <span class="font-bold text-4xl">2.000+</span>
            <p class="font-normal text-secondary">Produtos de Qualidade</p>
          </div>
          <div class="flex flex-col gap-2 pl-5">
            <span class="font-bold text-4xl">30.000+</span>
            <p class="font-normal text-secondary">Clientes Satisfeitos</p>
          </div>
        </div>
      </div>
      <div class="relative w-full min-w-[336px] mt-auto h-full">
        <img
          :src="heroSectionPic"
          alt="heroSectionPic"
          class="w-full object-cover object-top h-full"
        />
      </div>
    </div>
  </div>
</template>
