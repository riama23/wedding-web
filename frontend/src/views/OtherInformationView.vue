<template>
  <div class="c-other-info">
    <h1 class="display-1">{{ $t('info-title') }}</h1>
    <p class="c-other-info__prelude" v-html="$t('info-prelude')"></p>

    <div class="c-other-info__tourist">
      <h2 class="subtitle-1">{{ $t('info-tourist-title') }}</h2>

      <div class="c-other-info__tourist__bilbao">
        <img src="../assets/images/bilbao.jpg" />

        <div class="c-other-info__tourist__bilbao__text">
          <h3 class="display-2 text-center">{{ $t('info-tourist-bilbao-title') }}</h3>
          <ul v-html="$t('info-tourist-bilbao-places')"></ul>
        </div>
      </div>

      <div class="c-other-info__tourist__around">
        <h3 class="display-2 text-center">{{ $t('info-tourist-around-title') }}</h3>
        <ul v-html="$t('info-tourist-around-text')"></ul>
        <img class="hidden md:block" src="../assets/images/images-around-desktop.jpg" />
        <img class="md:hidden" src="../assets/images/images-around-desktop.jpg " />
      </div>
    </div>

    <div class="c-other-info__gastronomy">
      <h2 class="subtitle-1">{{ $t('info-gastronomy-title') }}</h2>

      <div class="c-other-info__gastronomy__content">
        <div class="c-other-info__gastronomy__item">
          <h3 class="display-2 text-center">{{ $t('info-gastronomy-bilbao-title') }}</h3>

          <div
            class="c-other-info__gastronomy__item__text"
            v-html="$t('info-gastronomy-bilbao-text')"
          ></div>
        </div>

        <div class="c-other-info__gastronomy__item">
          <h3 class="display-2 text-center">{{ $t('info-gastronomy-deusto-title') }}</h3>

          <div
            class="c-other-info__gastronomy__item__text"
            v-html="$t('info-gastronomy-deusto-text')"
          ></div>
        </div>
      </div>
    </div>

    <div class="c-other-info__module">
      <h2 class="display-2">{{ $t('info-shopping-title') }}</h2>

      <div class="c-other-info__module__content">
        <img src="../assets/images/zubiarte.jpg" />
        <div class="c-other-info__module__content__text" v-html="$t('info-shopping-text')"></div>
      </div>
    </div>

    <div class="c-other-info__module">
      <h2 class="display-2">{{ $t('info-hairdressing-title') }}</h2>

      <div class="c-other-info__module__content">
        <img src="../assets/images/peluqueria.png" />
        <div
          class="c-other-info__module__content__text"
          v-html="$t('info-hairdressing-text')"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.c-other-info {
  @apply flex flex-col items-center justify-start gap-16 container max-w-[960px];

  &__prelude {
    @apply text-center;
  }

  &__tourist {
    @apply flex flex-col items-center justify-start gap-16;

    &__bilbao {
      @apply grid grid-cols-2 gap-6;
      @apply max-md:grid-cols-1;

      &__text {
        @apply flex flex-col justify-center gap-4;

        ul {
          @apply list-disc list-inside;
        }
      }
    }

    &__around {
      @apply flex flex-col items-center justify-start gap-12;

      ul {
        @apply list-inside text-center grid gap-4;
      }

      img {
        @apply w-full;
      }
    }
  }

  &__gastronomy {
    @apply flex flex-col items-center justify-start gap-16;

    &__content {
      @apply grid grid-cols-2 gap-16;
      @apply max-md:grid-cols-1;
    }

    &__item {
      @apply flex flex-col justify-start items-center gap-4;

      &__text {
        @apply list-disc list-inside md:text-center;

        ul {
          @apply list-disc list-inside;
        }
      }
    }
  }

  &__module {
    @apply flex flex-col items-center justify-start gap-16;

    &:nth-child(even) {
      .c-other-info__module__content {
        img {
          @apply md:order-2;
        }
      }
    }

    &__content {
      @apply grid grid-cols-2 gap-8;
      @apply max-md:grid-cols-1;

      img {
        @apply w-full;
      }

      &__text {
        @apply flex flex-col justify-center gap-4;

        ul {
          @apply list-disc list-inside;
        }
      }
    }
  }
}
</style>
