<script setup lang="ts">
import CalvinKleinSVG from '../svgs/logos/CalvinKleinSVG.vue'
import GucciSVG from '../svgs/logos/GucciSVG.vue'
import PradaSVG from '../svgs/logos/PradaSVG.vue'
import VersaceSVG from '../svgs/logos/VersaceSVG.vue'
import ZaraSVG from '../svgs/logos/ZaraSVG.vue'
</script>
<template>
  <div class="bg-complement w-full flex justify-center">
    <div
      class="relative w-full max-w-max flex whitespace-nowrap overflow-x-hidden before:absolute before:top-0 before:left-0 before:w-1/6 before:bottom-0 before:bg-gradient-to-r before:from-complement before:to-transparent before:z-50 after:absolute after:top-0 after:right-0 after:w-1/6 after:bottom-0 after:bg-gradient-to-l after:from-complement after:to-transparent after:z-50"
    >
      <div class="flex py-7 logos">
        <ZaraSVG class="h-12 text-tertiary min-w-44 px-12" />
        <CalvinKleinSVG class="h-12 text-tertiary min-w-44 px-12" />
        <GucciSVG class="h-12 text-tertiary min-w-44 px-12" />
        <PradaSVG class="h-12 text-tertiary min-w-44 px-12" />
        <VersaceSVG class="h-12 text-tertiary min-w-44 px-12" />
      </div>
      <div class="flex py-7 logos">
        <ZaraSVG class="h-12 text-tertiary min-w-44 px-12" />
        <CalvinKleinSVG class="h-12 text-tertiary min-w-44 px-12" />
        <GucciSVG class="h-12 text-tertiary min-w-44 px-12" />
        <PradaSVG class="h-12 text-tertiary min-w-44 px-12" />
        <VersaceSVG class="h-12 text-tertiary min-w-44 px-12" />
      </div>
    </div>
  </div>
</template>
