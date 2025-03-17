<script setup lang="ts">
const isBurgerClicked = ref(false)
</script>

<template>
  <!-- TODO: Create a functionality to change the document language -->
  <!-- TODO: Maybe create a way so it sticky when passing a certain point -->
  <nav class="fixed z-[99] w-full px-2 md:px-0">
    <!-- Tablet and Desktop -->
    <div class="hidden md:block">
      <div
        class="mx-auto grid max-w-screen-xl grid-cols-3 flex-wrap items-center justify-between rounded-md border-2 border-primary bg-background px-6 py-4 shadow-xl"
      >
        <div class="justify-self-start">
          <a
            href=""
            @click.prevent
          >
            <img
              src="https://www.danantaraindonesia.com/images/v2/danantara-logo-black-v2.png"
              alt=""
              class="w-48"
            />
          </a>
        </div>
        <ul
          class="flex flex-row gap-4 justify-self-center whitespace-nowrap font-semibold uppercase"
        >
          <li class="decoration-2 hover:text-accent hover:underline">
            Tentang
          </li>
          <li class="decoration-2 hover:text-accent hover:underline">
            Visi & Misi
          </li>
          <li class="decoration-2 hover:text-accent hover:underline">
            Struktur
          </li>
          <li class="decoration-2 hover:text-accent hover:underline">Berita</li>
          <li class="decoration-2 hover:text-accent hover:underline">Kontak</li>
        </ul>
        <div class="flex flex-row justify-self-end">
          <button class="font-semibold decoration-2 hover:underline">EN</button>
          <span class="mx-2">|</span>
          <button class="font-semibold decoration-2 hover:underline">ID</button>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="space-y-2 md:hidden">
      <div
        class="mx-auto flex max-w-screen-xl flex-row flex-wrap items-center justify-between rounded-md border-2 border-primary bg-background p-2 shadow-xl"
      >
        <div>
          <a
            href=""
            @click.prevent
          >
            <img
              src="https://www.danantaraindonesia.com/images/v2/danantara-logo-black-v2.png"
              alt=""
              class="w-32"
            />
          </a>
        </div>
        <button
          class="justify-self-end font-semibold"
          @click="isBurgerClicked = !isBurgerClicked"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            :class="{ 'text-accent': isBurgerClicked }"
            class="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <!-- Dropdown -->
      <div
        v-show="isBurgerClicked"
        class="space-y-2 rounded-md border-2 border-primary bg-background p-2 shadow-xl"
      >
        <ul class="space-y-2 whitespace-nowrap text-sm font-semibold uppercase">
          <li class="decoration-2 hover:text-accent hover:underline">
            Tentang
          </li>
          <li class="decoration-2 hover:text-accent hover:underline">
            Visi & Misi
          </li>
          <li class="decoration-2 hover:text-accent hover:underline">
            Struktur
          </li>
          <li class="decoration-2 hover:text-accent hover:underline">Berita</li>
          <li class="decoration-2 hover:text-accent hover:underline">Kontak</li>
        </ul>

        <div class="h-[1px] bg-accent"></div>

        <div class="flex flex-row items-center justify-center text-sm">
          <button class="font-semibold decoration-2 hover:underline">EN</button>
          <span class="mx-2">|</span>
          <button class="font-semibold decoration-2 hover:underline">ID</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
