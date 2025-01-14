<script setup lang="ts">
import SearchSVG from '../svgs/SearchSVG.vue'
</script>
<template>
  <div
    class="bg-accent grow flex items-center gap rounded-full px-4 focus-within:border focus-within:border-secondary overflow-clip transition-all max-md:hidden"
  >
    <button>
      <SearchSVG class="w-6 h-6 opacity-40" />
    </button>
    <input
      type="text"
      placeholder="Pesquisar produtos..."
      class="py-3 pl-3 grow bg-accent outline-none"
    />
  </div>
</template>
