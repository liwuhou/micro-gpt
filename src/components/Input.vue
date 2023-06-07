<template>
  <div class="input">
    <div class="stuff">
      <Icon class="stuff-item" icon="history" @click="$emit('history')" />
      <Icon class="stuff-item" icon="trash" @click="$emit('trash')" />
    </div>
    <textarea class="textarea" autofocus v-model="showContent" ref="$inputRef" :placeholder="placeholder"></textarea>
    <Icon class="send" icon="send" :width="15" @click="handleClickSend" />
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'
import { ref, computed, onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'trash'): void
  (e: 'history'): void
  (e: 'send', content: string): void
}>()
const content = ref('')
const placeholder = ref('')
const $inputRef = ref<HTMLTextAreaElement | null>(null)

onMounted(() => {
  placeholder.value = 'Input here... (ctrl or command + enter = send)'
})

const showContent = computed({
  get() {
    return content.value
  },
  set(value) {
    content.value = value
    if ($inputRef.value) {
      if (value === '') {
        $inputRef.value.style.height = '30px'
      } else {
        $inputRef.value.style.height = `${$inputRef.value.scrollHeight}px`
      }
    }
  },
})

const handleClickSend = () => {
  emit('send', content.value)
  content.value = ''
}
</script>

<style scoped lang="scss">
.input {
  display: flex;
  align-items: end;
  padding: 15px;
  height: fit-content;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  .stuff {
    display: flex;

    &-item {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }

  .textarea {
    flex-grow: 1;
    box-sizing: border-box;
    border: 1px solid #ccc;
    padding: 8px 9px;
    min-height: 30px;
    max-height: 90px;
    height: 30px;
    margin: 0 10px;
    background: #fff;
    color: #333;
    resize: none;
    overflow: hidden;

    &:focus {
      border-color: #cbdce6;
    }

    &:hover,
    &:active,
    &:focus {
      outline: none;
    }
  }

  .send {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 30px;
    background: #cbdce6;
    border-radius: 4px;
    cursor: pointer;
    &:active {
      opacity: 1;
    }
  }
}
</style>
