<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center space-y-4">
    <h1
      class="text-[60px] font-bold leading-none md:text-[80px] xl:text-[100px]"
    >
      404
    </h1>
    <p class="max-w-[300px] break-words xl:text-xl">
      <span class="font-semibold">{{ $route.path }}</span> tidak ditemukan.
    </p>
    <NuxtLink
      to="/"
      class="rounded-md bg-accent px-2 py-1 uppercase text-background hover:text-text xl:text-lg"
    >
      Kembali
    </NuxtLink>
  </div>
</template>
