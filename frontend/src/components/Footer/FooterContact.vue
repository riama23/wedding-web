<template>
  <footer class="c-footer">
    <p class="display-2">{{ $t('footer-title') }}</p>
    <a :href="`mailto:${$t('footer-email')}`">
      {{ $t('footer-email') }}
    </a>
    <a :href="`tel:${$t('footer-monika_phone')}`"
      ><strong>Monika:</strong> {{ $t('footer-monika_phone') }}</a
    >
    <a :href="`tel:${$t('footer-enrique_phone')}`"
      ><strong>Enrique:</strong> {{ $t('footer-enrique_phone') }}</a
    >
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.c-footer {
  @apply flex flex-col justify-center items-center gap-1 py-16 bg-ocher;
}
</style>
