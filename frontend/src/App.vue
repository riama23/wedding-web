<template>
  <HeaderMenu />

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :key="$route.path" :is="Component" />
    </transition>
  </router-view>

  <FooterContact />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderMenu from '@/components/Header/HeaderMenu.vue'
import FooterContact from '@/components/Footer/FooterContact.vue'
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
