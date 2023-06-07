<template>
  <Layout class="chat">
    <Header class="header">
      <Profile :bot="bot" />
      <div class="tools">
        <Icon :icon="ICON.share" @click="handleShare" />
        <Icon :icon="ICON.setting" @click="handleSetting" />
      </div>
    </Header>
    <!-- Content -->
    <div style="flex-grow: 1"></div>
    <Input @send="handleSend" />
  </Layout>
</template>
<script setup lang="ts">
import Layout from '../components/Layout.vue'
import Header from '../components/Header.vue'
import Icon from '../components/Icon.vue'
import Profile from '../components/Profile.vue'
import Input from '../components/Input.vue'
import { ICON, BotSet } from '../constant'
import { ref } from 'vue'

const bot = ref<BotSet>('Mircoblue')

const handleSetting = () => console.log(111)
const handleShare = () => console.log(222)
const handleSend = (content: string) => {
  console.log(content)
}
</script>
<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tools {
      display: flex;

      *:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>
