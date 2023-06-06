<template>
  <div class="profile">
    <img class="avatar" :src="renderBot.avatar" />
    <div class="nickname">{{ renderBot.nickname }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRef, computed } from 'vue'
import { BotSet, BOT } from '../constant'

interface Props {
  bot: BotSet
}

const props = defineProps<Props>()
const bot = toRef(props, 'bot')
const renderBot = computed(() => BOT[bot.value])
</script>

<style scoped lang="scss">
.profile {
  display: flex;
  cursor: pointer;
  user-select: none;
  color: #666;
  &:hover {
    color: #333;
  }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .nickname {
    height: 30px;
    line-height: 30px;
  }
}
</style>
