<template>
	<HeaderMenu />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderMenu from "@/components/Header/HeaderMenu.vue";
</script>

<style scoped></style>
