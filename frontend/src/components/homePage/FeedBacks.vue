<script setup lang="ts">
import happyCustomers from '@/mock/happyCustomers'
import FeedbackCard from '../FeedbackCard.vue'
import LeftArrowSVG from '../svgs/LeftArrowSVG.vue'
import RightArrowSVG from '../svgs/RightArrowSVG.vue'
import { onMounted, ref, type Ref } from 'vue'
import { conditionalRound, getGap } from '@/utils'

const feedbackCardRef: Ref<HTMLElement | null> = ref(null)
const currentCard = ref(0)
const cardsInWindow = ref(0)
let cardWidth = 0
const cardsWithBlur = [0, 0]
let windowWidth = window.innerWidth > 1440 ? 1440 : window.innerWidth

const addBlur = () => {
  if (!feedbackCardRef.value) return
  removeBlur()
  const gap = getGap(feedbackCardRef.value)
  cardsInWindow.value = conditionalRound(windowWidth / (cardWidth + gap), 20)

  if (currentCard.value > 0) {
    const child = feedbackCardRef.value.children[currentCard.value - 1] as HTMLElement
    cardsWithBlur[0] = currentCard.value - 1
    child.style.filter = 'blur(3px)'
  }

  if (currentCard.value + cardsInWindow.value < happyCustomers.length) {
    const child = feedbackCardRef.value.children[
      cardsInWindow.value + currentCard.value
    ] as HTMLElement
    cardsWithBlur[1] = cardsInWindow.value + currentCard.value
    child.style.filter = 'blur(3px)'
  }
}

const removeBlur = () => {
  if (!feedbackCardRef.value) return
  const child1 = feedbackCardRef.value.children[cardsWithBlur[0]] as HTMLElement
  const child2 = feedbackCardRef.value.children[cardsWithBlur[1]] as HTMLElement
  child1.style.filter = 'none'
  child2.style.filter = 'none'
}

const handleClick = (direction: number) => {
  if (!feedbackCardRef.value || (currentCard.value === 0 && direction === -1)) return
  const gap = getGap(feedbackCardRef.value)
  currentCard.value += direction
  addBlur()

  feedbackCardRef.value.style.transform = `translateX(-${cardWidth * currentCard.value + gap * currentCard.value}px)`
}

const handleResize = () => {
  if (!feedbackCardRef.value) return
  const gap = getGap(feedbackCardRef.value)
  windowWidth = window.innerWidth > 1440 ? 1440 : window.innerWidth
  cardWidth = (feedbackCardRef.value.children[0] as HTMLElement).offsetWidth
  addBlur()

  feedbackCardRef.value.style.transform = `translateX(-${cardWidth * currentCard.value + gap * currentCard.value}px)`
}

onMounted(() => {
  handleResize()

  window.addEventListener('resize', handleResize)
})
</script>
<template>
  <div class="flex flex-col gap-12 font-bold max-w-max overflow-visible box-border">
    <div class="flex justify-between">
      <h2 class="text-5xl">Nossos feedbacks</h2>
      <div class="flex gap-3">
        <button :style="currentCard === 0 ? { opacity: '40%', pointerEvents: 'none' } : ''">
          <LeftArrowSVG class="w-6 h-6" @click="handleClick(-1)" />
        </button>
        <button
          :style="
            currentCard + cardsInWindow < happyCustomers.length
              ? ''
              : { opacity: '40%', pointerEvents: 'none' }
          "
        >
          <RightArrowSVG class="w-6 h-6 poin" @click="handleClick(1)" />
        </button>
      </div>
    </div>
    <div class="flex gap-5 overflow-visible transition-all" ref="feedbackCardRef">
      <FeedbackCard
        v-for="happyCustomer in happyCustomers"
        :who="happyCustomer.who"
        :feedback="happyCustomer.feedback"
        v-bind:key="happyCustomer.who"
      />
    </div>
  </div>
</template>
