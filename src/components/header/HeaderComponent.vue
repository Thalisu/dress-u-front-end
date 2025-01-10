<script setup lang="ts">
import NavBar from './NavBar.vue'
import SearchBar from './SearchBar.vue'
import UserBar from './UserBar.vue'
</script>
<template>
  <header
    class="bg-primary w-full py-4 flex justify-center px-4 items-center h-20 max-w-max gap-10"
  >
    <NavBar class="mr-auto" />
    <SearchBar />
    <UserBar />
  </header>
</template>
