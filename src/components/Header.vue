<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  height: 30px;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
