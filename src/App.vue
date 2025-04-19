<script setup lang="ts">
import SolarSystem from '@/components/SolarSystem.vue'
</script>

<template>
  <div class="app-container">
    <SolarSystem />
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
