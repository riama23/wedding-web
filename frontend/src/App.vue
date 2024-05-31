<template>
  <HeaderMenu />

  <router-view v-slot="{ Component }">
    <main>
      <transition name="fade">
        <component :key="$route.path" :is="Component" />
      </transition>
    </main>
  </router-view>

  <FooterContact />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderMenu from '@/components/Header/HeaderMenu.vue'
import FooterContact from '@/components/Footer/FooterContact.vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  titleTemplate: `${t('doc-title')}`
})
</script>

<style scoped></style>
