<template>
  <div class="c-love-story">
    <h1 class="display-1">{{ $t('lovestory-title') }}</h1>
    <p class="text-center md:w-1/3">{{ $t('lovestory-intro') }}</p>

    <div class="c-love-story__story">
      <div class="c-love-story__story__text">
        <p v-html="$t('lovestory-t1')"></p>
      </div>
      <img src="../assets/images/image-example.jpg" alt="" />
    </div>

    <div class="c-love-story__story">
      <img src="../assets/images/image-example.jpg" alt="" />
      <div class="c-love-story__story__text">
        <p v-html="$t('lovestory-t2')"></p>
      </div>
    </div>

    <div class="c-love-story__story">
      <div class="c-love-story__story__text">
        <p v-html="$t('lovestory-t3')"></p>
      </div>
      <img src="../assets/images/image-example.jpg" alt="" />
    </div>

    <div class="c-love-story__story">
      <img src="../assets/images/image-example.jpg" alt="" />
      <div class="c-love-story__story__text">
        <p v-html="$t('lovestory-t4')"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.c-love-story {
  @apply flex flex-col items-center justify-start gap-32 container;
  @apply max-md:gap-8;

  &__story {
    @apply grid gap-12 grid-cols-[max(480px)max(480px)] items-center justify-center;
    @apply max-md:flex-col max-md:gap-8 max-md:grid-cols-1;

    img {
      @apply max-md:w-full max-md:order-1 object-cover;
    }

    &__text {
      @apply text-center;
      @apply max-md:order-2;
    }
  }
}
</style>
