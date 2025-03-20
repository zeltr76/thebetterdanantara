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
    <p class="max-w-[300px] xl:text-xl">
      Something went wrong in our end, sorry for the inconvenience. Please go
      back and try again.
    </p>
    <NuxtLink
      to="/"
      class="rounded-md bg-accent px-2 py-1 uppercase text-background hover:text-text xl:text-lg"
    >
      Back
    </NuxtLink>
  </div>
</template>
