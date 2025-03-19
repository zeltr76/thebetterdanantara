<script setup lang="ts">
const images = ref(["/images/children-indo.webp", "/images/flag-indo.webp"])

const randomImage = ref(null)

const imageAlt = ref(null)

const showImage = ref(false)

onMounted(async () => {
  randomImage.value =
    images.value[Math.floor(Math.random() * images.value.length)]

  imageAlt.value =
    "Hero " +
    randomImage.value
      .split("/")
      .pop()
      ?.split(".")[0]
      .replace(/-/g, " ")
      .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2
      })

  await new Promise((resolve) => setTimeout(resolve, 1000))
  showImage.value = true
})
</script>

<template>
  <div class="mx-auto max-w-screen-xl">
    <div
      class="relative flex h-[600px] flex-col items-center justify-center gap-1 shadow-xl md:h-[350px] xl:h-[500px] xl:gap-2"
    >
      <!-- Show img when resolved -->
      <!-- Otherwise show placeholder -->
      <!-- Don't say anything about the "alt" -->
      <img
        v-show="showImage"
        class="absolute inset-0 h-[600px] w-full object-cover md:h-[350px] xl:h-[500px]"
        :src="randomImage"
        :alt="imageAlt"
      />
      <div
        v-show="!showImage"
        class="absolute inset-0 animate-pulse bg-gray-400"
      ></div>

      <!-- Layer -->
      <div
        v-show="showImage"
        class="absolute inset-0 bg-black/40"
      ></div>

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
