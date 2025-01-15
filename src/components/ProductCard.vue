<script setup lang="ts">
defineProps({
  id: {
    type: Number,
    required: true,
  },
  images: {
    type: Array<string>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
})
</script>
<template>
  <div>
    <a :href="`/${id}`" class="flex flex-col gap-5 w-80">
      <img :src="images[0]" :alt="title" class="w-full aspect-square rounded-3xl" />
      <h3 class="font-bold text-xl">{{ title }}</h3>
      <div class="flex gap-3">
        <span class="text-2xl font-bold">{{
          `R\$ ${Math.round(price * (1 - (discount || 0)))}`
        }}</span>
        <span v-if="discount" class="opacity-40 line-through text-2xl font-bold">{{
          `R\$ ${price}`
        }}</span>
        <span
          v-if="discount"
          class="font-medium text-discount text-xs px-3 py-2 rounded-full bg-discount"
          >{{ `${discount * 100}%` }}</span
        >
      </div>
    </a>
  </div>
</template>
