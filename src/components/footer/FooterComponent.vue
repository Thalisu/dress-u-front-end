<script setup lang="ts">
import NewsLatter from './NewsLatter.vue'
import SocialS from './SocialS.vue'
import UtilityLinks from './UtilityLinks.vue'
import FooterRights from './FooterRights.vue'
</script>
<template>
  <footer class="bg-accent w-full flex justify-center items-center gap-10 mt-44 pb-2">
    <div class="max-w-max relative w-full px-[4.33%] flex flex-col gap-4">
      <NewsLatter />
      <div class="flex border-b-2 pb-12 gap-10 px-[4.133%] justify-center">
        <SocialS class="shrink" />
        <UtilityLinks class="grow" />
      </div>
      <FooterRights />
    </div>
  </footer>
</template>
