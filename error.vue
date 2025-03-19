<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center space-y-4">
    <h1
      class="text-[60px] font-bold leading-none md:text-[80px] xl:text-[100px]"
    >
      {{ error.statusCode }}
    </h1>
    <p
      v-if="error.statusCode === 404"
      class="xl:text-xl"
    >
      {{ error.message }}
    </p>
    <p
      v-else
      class="xl:text-xl"
    >
      Something went wrong, please try again.
    </p>
    <NuxtLink
      to="/"
      class="rounded-md bg-accent px-2 py-1 text-background hover:outline hover:outline-2 hover:outline-text xl:text-lg"
      >Kembali</NuxtLink
    >
  </div>
</template>
