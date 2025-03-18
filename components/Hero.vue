<script setup lang="ts">
const images = [
  "https://www.danantaraindonesia.com/images/v3/hero-children-indo.png",
  "https://www.danantaraindonesia.com/images/v3/building-flag-indo.png",
]

const randomImage = images[Math.floor(Math.random() * images.length)]
</script>

<template>
  <div class="mx-auto max-w-screen-xl">
    <div
      class="relative flex h-[400px] flex-col items-center justify-center gap-1 rounded-md bg-cover bg-center shadow-xl md:h-[350px] xl:h-[500px] xl:gap-2"
      :style="{ 'background-image': `url(${randomImage})` }"
    >
      <div class="absolute inset-0 rounded-md bg-black/40"></div>
      <p
        class="font-eb-garamond text-[30px] font-semibold leading-none text-background drop-shadow-xl md:text-[60px] xl:text-[96px]"
      >
        Daya Anagata Nusantara
      </p>
      <p
        class="font-eb-garamond text-xl leading-none text-background drop-shadow-xl md:text-[40px] xl:text-5xl"
      >
        "Demi Kemakmuran Indonesia"
      </p>
    </div>
  </div>
</template>

<style scoped></style>
