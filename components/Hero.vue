<script setup lang="ts">
const images = ref(["/images/children-indo.webp", "/images/flag-indo.webp"])

const randomImage = ref()

const imageAlt = ref()

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
      // @ts-ignore
      .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2
      })

  // Wait for html to load and then show image
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
      <img
        v-show="showImage"
        class="absolute inset-0 h-[600px] w-full object-cover md:h-[350px] xl:h-[500px]"
        :src="randomImage"
        :alt="imageAlt"
      />
      <!-- Otherwise show placeholder -->
      <div
        v-show="!showImage"
        class="absolute inset-0 animate-pulse bg-gray-400"
      ></div>

      <!-- Layer below text -->
      <div
        v-show="showImage"
        class="absolute inset-0 bg-black/40"
      ></div>

      <p
        class="text-center font-eb-garamond text-7xl font-semibold leading-none text-background drop-shadow-xl md:text-6xl xl:text-start xl:text-8xl"
      >
        Daya Anagata Nusantara
      </p>
      <p
        class="text-center font-eb-garamond text-3xl leading-none text-background drop-shadow-xl md:text-4xl xl:text-start xl:text-5xl"
      >
        "Demi Kemakmuran Indonesia"
      </p>
    </div>
  </div>
</template>

<style scoped></style>
