<script setup lang="ts">
const articles = ref([
  {
    id: 1,
    title: "Artikel 1",
    date: "2025-03-17", // YYYY-MM-DD
    img: "/images/fallback-image.webp",
  },
  {
    id: 2,
    title: "Artikel 2",
    date: "2025-03-17", // YYYY-MM-DD
    img: "/images/fallback-image.webp",
  },
  {
    id: 3,
    title: "Artikel 3",
    date: "2025-03-17", // YYYY-MM-DD
    img: "/images/fallback-image.webp",
  },
  {
    id: 4,
    title: "Artikel 4",
    date: "2025-03-17", // YYYY-MM-DD
    img: "/images/fallback-image.webp",
  },
])
</script>

<template>
  <div class="mx-auto max-w-screen-xl space-y-4">
    <AtomicSectionHeading>Berita</AtomicSectionHeading>

    <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
      <div
        v-for="(article, idx) in articles"
        :class="{ hidden: idx > articles.length - 3 }"
        class="bg-accent text-background shadow-xl md:block"
        :key="article.id"
      >
        <img
          :src="article.img"
          :alt="article.title + ' image'"
          loading="lazy"
          class="h-40 w-full object-cover object-center shadow-xl"
        />
        <div class="p-4">
          <p class="line-clamp-2 text-sm font-bold uppercase">
            {{ article.title }}
          </p>
          <p class="text-xs font-light">{{ article.date }}</p>
          <button
            disabled
            class="cursor-not-allowed text-sm font-semibold uppercase underline"
          >
            Lihat berita
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <button
        disabled
        target="_blank"
        class="cursor-not-allowed text-sm font-bold uppercase underline drop-shadow-xl"
      >
        Indeks berita
      </button>
    </div>
  </div>
</template>

<style scoped></style>
