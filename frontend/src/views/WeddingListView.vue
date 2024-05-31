<template>
  <div class="c-wedding-list">
    <h1 class="display-1">{{ $t('list-title') }}</h1>
    <p class="c-wedding-list__text subtitle-2" v-html="$t('list-t1')"></p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.c-wedding-list {
  @apply flex flex-col items-center justify-start gap-8 container;

  &__text {
    @apply text-center lg:w-1/2 max-md:w-full;
  }
}
</style>
