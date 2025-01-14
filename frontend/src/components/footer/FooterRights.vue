<script setup lang="ts">
import VisaSVG from '../svgs/badges/VisaSVG.vue'
import MasterCardSVG from '../svgs/badges/MasterCardSVG.vue'
import PayPalSVG from '../svgs/badges/PayPalSVG.vue'
import ApplePaySVG from '../svgs/badges/ApplePaySVG.vue'
import GooglePaySVG from '../svgs/badges/GooglePaySVG.vue'
</script>
<template>
  <div class="w-full flex justify-center flex-wrap overflow-clip gap-4">
    <span class="text-sm opacity-60 mx-auto"
      >Dress.U © 2024 - 2025, Todos os direitos reservados</span
    >
    <div class="flex mx-auto gap-3">
      <VisaSVG class="w-14 h-10 bg-primary p-2 rounded-md" />
      <MasterCardSVG class="w-14 h-10 bg-primary p-2 rounded-md" />
      <PayPalSVG class="w-14 h-10 bg-primary p-2 rounded-md" />
      <ApplePaySVG class="w-14 h-10 bg-primary p-2 rounded-md" />
      <GooglePaySVG class="w-14 h-10 bg-primary p-2 rounded-md" />
    </div>
  </div>
</template>
