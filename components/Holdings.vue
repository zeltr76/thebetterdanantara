<script setup lang="ts">
const images = ref([
  {
    id: 1,
    src: "/images/pertamina-logo.webp",
    alt: "Pertamina logo",
  },
  {
    id: 2,
    src: "/images/mind-id-logo.webp",
    alt: "Mining Industry Indonesia logo",
  },
  {
    id: 3,
    src: "/images/bmri-logo.webp",
    alt: "Bank Mandiri logo",
  },
  {
    id: 4,
    src: "/images/bbri-logo.webp",
    alt: "Bank Rakyat Indonesia logo",
  },
  {
    id: 5,
    src: "/images/pln-logo.webp",
    alt: "Pembangkit Listrik Negara logo",
  },
  {
    id: 6,
    src: "/images/telkom-logo.webp",
    alt: "Telkom logo",
  },
  {
    id: 7,
    src: "/images/bbni-logo.webp",
    alt: "Bank Negara Indonesia logo",
  },
])
</script>

<template>
  <div class="mx-auto max-w-[1000px] space-y-4">
    <AtomicSectionHeading>Holdings</AtomicSectionHeading>

    <div
      class="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 xl:grid-cols-4"
    >
      <img
        v-for="image in images"
        :src="image.src"
        :alt="image.alt"
        class="size-28 xl:size-36"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped></style>
