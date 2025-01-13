<script lang="ts" setup>
import HeroSection from '../components/homePage/HeroSection.vue'
import BrandCarousel from '../components/homePage/BrandCarousel.vue'
import ShowCase from '../components/homePage/ShowCase.vue'
import CategoriesCard from '../components/homePage/CategoriesCard.vue'
import FeedBacks from '../components/homePage/FeedBacks.vue'
</script>
<template>
  <main class="w-full h-full main">
    <HeroSection />
    <BrandCarousel />
    <div class="flex flex-col gap-20 max-w-full px-4">
      <ShowCase category="ACABARAM DE CHEGAR" itemFrom="0" itemTo="4" :border="false" />
      <ShowCase category="MAIS POPULARES" itemFrom="4" itemTo="8" />
      <CategoriesCard />
      <FeedBacks />
    </div>
  </main>
</template>
