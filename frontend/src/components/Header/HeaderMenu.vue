<template>
  <header class="c-nav-bar">
    <div class="c-nav-bar__wrapper">
      <p
        v-if="!isOpen"
        class="flex items-center justify-end gap-1 md:hidden"
        @click.stop="openMenu"
      >
        {{ $t('Menu') }}
        <span class="material-symbols-rounded rounded-full bg-gold p-1">menu</span>
      </p>

      <div
        class="c-nav-bar__wrapper__list max-md:opacity-0 max-md:left-full"
        :class="[isOpen ? 'max-md:!opacity-100 max-md:!left-0' : '']"
      >
        <span
          v-if="isOpen"
          class="material-symbols-rounded fixed top-3 right-3 rounded-full bg-gold p-1"
          @click.stop="openMenu"
          >close</span
        >
        <RouterLink
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          class="c-nav-bar__wrapper__item"
          @click="isOpen = false"
        >
          {{ $t(link.name) }}
        </RouterLink>

        <select v-model="lang" class="bg-transparent" @change="changeLang">
          <option v-for="lang in langs" :key="lang.value" :value="lang.value">
            {{ lang.flag }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const links = [
  { name: 'link-home', path: '/' },
  { name: 'link-story', path: '/love-story' },
  { name: 'link-rsvp', path: '/rsvp' },
  { name: 'link-wedding_list', path: '/wedding-list' },
  { name: 'link-oyher-information', path: '/other-information' }
]

const langs = [
  { flag: '🇪🇸', value: 'es' },
  { flag: '🇬🇧', value: 'en' },
  { flag: '🇦🇹', value: 'de' }
]
const lang = ref(navigator.language.slice(0, 2))
const isOpen = ref(false)

const changeLang = () => (i18n.locale.value = lang.value)
const openMenu = () => (isOpen.value = !isOpen.value)

watch(isOpen, () => {
  document.body.style.overflow = isOpen.value ? 'hidden' : 'auto'
})
</script>

<style scoped lang="scss">
.c-nav-bar {
  @apply flex justify-center h-[80px] border-b border-b-gold bg-white;
  @apply max-md:h-[60px];

  &__wrapper {
    @apply flex justify-center items-center gap-4 container;
    @apply max-md:justify-end max-md:items-center max-md:px-3;

    &__list {
      @apply flex gap-4;
      @apply max-md:flex-col max-md:bg-ocher max-md:fixed max-md:top-0 max-md:w-full max-md:h-full max-md:z-50;
      @apply max-md:justify-center max-md:items-center;
      @apply max-md:transition-all max-md:duration-300 max-md:ease-in-out;
    }

    &__item {
      @apply py-1 px-2 text-center;

      &.router-link-active {
        @apply border-b-2 border-b-gold;
      }
    }
  }
}
</style>
