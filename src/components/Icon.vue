<template>
  <div class="icon">
    <img class="img" :src="icon" :style="{ width: style.width, height: style.height }" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRef, computed, watchEffect } from 'vue'
import { ICON } from '../constant'

interface Props {
  icon: ICON
  width?: number
  height?: number
}

const DEFAULT_WIDTH = 25

const props = defineProps<Props>()
const alt = toRef(props, 'icon')
const icon = computed<string>(() => `${ICON[props.icon]}.svg`)
const style = computed<{ width: string; height: string }>(() => ({
  width: `${props.width ?? DEFAULT_WIDTH}px`,
  height: `${props.height ?? props.width ?? DEFAULT_WIDTH}px`,
}))

watchEffect(() => {
  if (!icon) throw new Error('Icon component need icon source!')
})
</script>

<style scoped lang="scss">
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  opacity: 0.65;

  &:hover {
    opacity: 0.8;
  }

  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
