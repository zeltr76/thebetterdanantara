<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <!-- This Footer sucks I hate it -->
  <footer
    class="mt-16 space-y-16 bg-text px-4 pb-2 pt-10 text-background xl:mt-24"
  >
    <div
      class="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-center"
    >
      <div class="flex flex-row items-center gap-2">
        <IconLocation />

        <div class="text-sm xl:text-base">
          <p class="font-bold">Danantara Indonesia Sentra Mandiri</p>
          <p>Jl. R.P. Soeroso No. 2-4 Jakarta Pusat, 10330, Indonesia</p>
        </div>
      </div>
      <div class="flex flex-row items-center gap-2 text-sm xl:text-base">
        <IconEmail />

        <div class="text-sm xl:text-base">
          <p class="font-bold">Email:</p>
          <NuxtLink to="mailto:contact@danantaraindonesia.com"
            >contact@danantaraindonesia.com</NuxtLink
          >
        </div>
      </div>
    </div>

    <p class="text-center text-sm font-light">
      &copy; {{ year }}
      <NuxtLink
        to="https://github.com/zeltr76"
        target="_blank"
        >zeltr76</NuxtLink
      >
    </p>
  </footer>
</template>

<style scoped></style>
