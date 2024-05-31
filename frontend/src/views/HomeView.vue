<template>
  <div class="c-homeview">
    <div class="c-homeview__hero">
      <p class="c-homeview__hero__date subtitle-1 font-bold">{{ weddingDate }}</p>
      <h1 class="c-homeview__hero__title display-1" v-html="$t('home-title')"></h1>
      <p class="c-homeview__hero__countdown display-2">{{ countdownUpdated }}</p>

      <button class="button box">{{ $t('home-cta') }}</button>
    </div>

    <div class="c-homeview__resume">
      <div class="c-homeview__resume__box">
        <img src="../assets/images/glasses.png" alt="" />
        <h2 class="c-homeview__resume__box__title" v-html="$t('home-resume-preparty')"></h2>
      </div>
      <div class="c-homeview__resume__box">
        <img src="../assets/images/church.png" alt="" />
        <h2 class="c-homeview__resume__box__title" v-html="$t('home-resume-wedding')"></h2>
      </div>
      <div class="c-homeview__resume__box">
        <img src="../assets/images/party.png" alt="" />
        <h2 class="c-homeview__resume__box__title" v-html="$t('home-resume-party')"></h2>
      </div>
    </div>

    <div class="c-homeview__information">
      <h2 class="display-2 font-medium" v-html="$t('home-information-church')"></h2>
      <p v-html="$t('home-information-church-content')"></p>
    </div>

    <div class="c-homeview__information">
      <h2 class="display-2 font-medium" v-html="$t('home-information-restaurant')"></h2>
      <p v-html="$t('home-information-restaurant-content')"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'

const $dayjs = inject('dayjs', dayjs)

const { t, locale } = useI18n()
const futureDate = $dayjs(`${t('wedding_date')} ${t('wedding_time')}`)
const weddingDate = ref(
  $dayjs(t('wedding_date')).locale(useI18n().locale.value).format('DD MMMM YYYY')
)

const countdown = () => {
  const now = $dayjs()
  const diff = futureDate.diff(now)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / 1000 / 60) % 60)

  return `${days} ${t('day', days)} - ${hours} ${t('hour', hours)} - ${minutes} ${t('minute', minutes)}`
}
const countdownUpdated = ref(countdown())

const interval = setInterval(() => (countdownUpdated.value = countdown()), 1000)

watch(locale, () => {
  countdownUpdated.value = countdown()
  weddingDate.value = $dayjs(t('wedding_date')).locale(locale.value).format('DD MMMM YYYY')
})

onMounted(() => interval)
onUnmounted(() => clearInterval(interval))
</script>

<style scoped lang="scss">
.c-homeview {
  @apply flex flex-col items-center justify-start gap-32 container;
  @apply max-md:gap-16;

  &__hero {
    @apply flex flex-col items-center gap-6 text-center;
  }

  &__resume {
    @apply flex justify-around w-full;
    @apply max-md:flex-col max-md:gap-10;

    &__box {
      @apply flex flex-col items-center gap-4;

      img {
        @apply w-[126px] aspect-auto;
      }

      &__title {
        @apply text-center;
      }
    }
  }

  &__information {
    @apply flex flex-col items-center gap-3 max-w-[540px] text-center;
  }
}
</style>

<style lang="scss">
.c-homeview {
  &__hero {
    &__title {
      > span {
        @apply whitespace-nowrap;
      }
    }
  }
}
</style>
