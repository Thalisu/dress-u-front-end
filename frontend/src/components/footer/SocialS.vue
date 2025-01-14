<script setup lang="ts">
import FacebookSVG from '../svgs/logos/FacebookSVG.vue'
import GitHubSVG from '../svgs/logos/GitHubSVG.vue'
import InstagramSVG from '../svgs/logos/InstagramSVG.vue'
import TwitterSVG from '../svgs/logos/TwitterSVG.vue'
</script>
<template>
  <div class="flex flex-col gap-9">
    <div class="flex flex-col gap-6">
      <h2 class="font-primary text-3xl font-bold">DRESS.U</h2>
      <p class="opacity-60 max-w-60">
        Roupas que fazem o seu estilo e que exaltam sua individualidade
      </p>
    </div>
    <div class="flex gap-3">
      <button class="p-3 rounded-full bg-primary border-2">
        <TwitterSVG class="h-3 w-3" />
      </button>
      <button class="p-3 rounded-full bg-primary border-2">
        <FacebookSVG class="h-3 w-3" />
      </button>
      <button class="p-3 rounded-full bg-primary border-2">
        <InstagramSVG class="h-3 w-3" />
      </button>
      <button class="p-3 rounded-full bg-primary border-2">
        <GitHubSVG class="h-3 w-3" />
      </button>
    </div>
  </div>
</template>
