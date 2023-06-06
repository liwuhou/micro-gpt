<template>
  <div class="input">
    <div class="stuff">
      <Icon class="stuff-item" icon="history" />
      <Icon class="stuff-item" icon="trash" />
    </div>
    <textarea class="textarea" autofocus></textarea>
    <Icon class="send" icon="send" :width="15" />
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'
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
    box-sizing: border-box;
    border: 1px solid black;
    padding: 8px 9px;
    min-height: 30px;
    height: auto;
    background: #fff;
    line-height: 30px;
    color: #333;
    resize: none;
    overflow: hidden;
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
