<script setup lang="ts">
import NavBar from './NavBar.vue'
import SearchBar from './SearchBar.vue'
import UserBar from './UserBar.vue'
</script>
<template>
  <header
    class="bg-primary w-full py-4 flex justify-center mx-1 items-center gap-10 px-24 h-20 max-w-max"
  >
    <h1
      class="font-primary text-2xl font-bold text-center block leading-none relative h-[1.125rem]"
    >
      <span class="relative -top-[0.375rem] left-0">DRESS.U</span>
    </h1>
    <NavBar />
    <SearchBar />
    <UserBar />
  </header>
</template>
