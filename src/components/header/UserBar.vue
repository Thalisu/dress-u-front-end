<script lang="ts" setup>
import CartSVG from '../svgs/CartSVG.vue'
import UserSVG from '../svgs/UserSVG.vue'
import SearchSVG from '../svgs/SearchSVG.vue'
</script>
<template>
  <div class="flex gap-4">
    <div class="relative w-6 h-6 md:hidden">
      <button>
        <SearchSVG class="w-6 h-6" />
      </button>
    </div>
    <CartSVG class="w-6 h-6" />
    <UserSVG class="w-6 h-6" />
  </div>
</template>
