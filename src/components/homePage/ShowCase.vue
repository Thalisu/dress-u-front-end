<script setup lang="ts">
import ProductCard from '../ProductCard.vue'
import { defineProps } from 'vue'
import products from '@/mock/products'
defineProps({
  category: {
    type: String,
    required: true,
  },
  border: {
    type: Boolean,
    default: true,
  },
  itemFrom: {
    type: String,
    default: '0',
  },
  itemTo: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="pt-20 flex flex-col gap-14 w-full items-center relative">
    <div class="absolute top-0 w-11/12 max-w-max border-b-2" v-if="border"></div>
    <h2 class="font-primary text-5xl font-bold text-center w-fit text-wrap flex flex-wrap">
      {{ category }}
    </h2>
    <div class="flex gap-5 self-start pl-4 ml-auto mr-auto">
      <ProductCard
        v-for="product in products.slice(Number(itemFrom), Number(itemTo))"
        :key="product.id"
        v-bind="product"
      />
    </div>
    <button class="border font-medium px-12 py-4 w-fit rounded-full">Ver todos</button>
  </div>
</template>
