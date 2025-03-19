<script setup lang="ts">
const images = ref([
  "/images/hero-children-indo.webp",
  "/images/building-flag-indo.webp",
])

const randomImage = ref(null)

if (!randomImage.value) {
  randomImage.value =
    images.value[Math.floor(Math.random() * images.value.length)]
}
</script>

<template>
  <div class="mx-auto max-w-screen-xl">
    <div
      class="relative flex h-[600px] flex-col items-center justify-center gap-1 shadow-xl md:h-[350px] xl:h-[500px] xl:gap-2"
    >
      <img
        class="absolute inset-0 h-[600px] w-full object-cover md:h-[350px] xl:h-[500px]"
        :src="randomImage"
        alt=""
      />

      <div class="absolute inset-0 bg-black/40"></div>

      <p
        class="text-center font-eb-garamond text-[60px] font-semibold leading-none text-background drop-shadow-xl xl:text-start xl:text-[96px]"
      >
        Daya Anagata Nusantara
      </p>
      <p
        class="text-center font-eb-garamond text-[24px] text-xl leading-none text-background drop-shadow-xl md:text-[40px] xl:text-start xl:text-5xl"
      >
        "Demi Kemakmuran Indonesia"
      </p>
    </div>
  </div>
</template>

<style scoped></style>
