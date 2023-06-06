<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.layout {
  box-sizing: border-box;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  margin: 15px;
  border: 1px solid #f6f6f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}
</style>
