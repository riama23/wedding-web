<template>
  <div class="c-rsvp">
    <div class="c-rsvp__form" ref="form"></div>
  </div>
</template>

<script setup lang="ts">
import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const form = ref<HTMLElement>()

onMounted(() => {
  if (!form.value) return
  createWidget(t('typeform'), { container: form.value })
})

watch(locale, () => {
  console.log(locale)
  if (!form.value) return
  createWidget(t('typeform'), { container: form.value })
})
</script>

<style lang="scss" scoped>
.c-rsvp {
  @apply flex flex-col items-center justify-start gap-16 container max-w-[960px];

  &__form {
    @apply w-full max-w-[640px] h-[320px] md:h-[800px];
  }
}
</style>
