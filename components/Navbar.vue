<script setup lang="ts">
const isBurgerClicked = ref(false)

const scrollTo = ref()

onMounted(() => {
  scrollTo.value = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      })
    }
  }
})
</script>

<template>
  <!-- TODO: Create a functionality to change the document language -->
  <!-- TODO: Maybe create a way so it sticky when passing a certain point -->
  <nav class="fixed z-[99] w-full px-2">
    <!-- Desktop -->
    <div class="hidden xl:block">
      <div
        class="mx-auto grid max-w-screen-xl grid-cols-3 flex-wrap items-center justify-between rounded-md border-2 border-primary bg-background px-6 py-4 shadow-xl"
      >
        <div class="justify-self-start">
          <NuxtLink to="/">
            <img
              src="/public/images/danantara-logo-black-v2.webp"
              alt="Danantara logo"
              class="w-48"
            />
          </NuxtLink>
        </div>
        <ul
          class="flex flex-row gap-4 justify-self-center whitespace-nowrap font-semibold uppercase"
        >
          <li
            class="decoration-2 hover:text-accent hover:underline"
            @click="scrollTo('tentang')"
          >
            Tentang
          </li>
          <li
            class="decoration-2 hover:text-accent hover:underline"
            @click="scrollTo('misi')"
          >
            Visi & Misi
          </li>
          <li
            class="decoration-2 hover:text-accent hover:underline"
            @click="scrollTo('struktur')"
          >
            Struktur
          </li>
          <li
            class="decoration-2 hover:text-accent hover:underline"
            @click="scrollTo('berita')"
          >
            Berita
          </li>
          <li
            class="decoration-2 hover:text-accent hover:underline"
            @click="scrollTo('kontak')"
          >
            Kontak
          </li>
        </ul>
        <div class="flex flex-row justify-self-end">
          <button
            class="disabled cursor-not-allowed font-semibold decoration-2"
          >
            EN
          </button>
          <span class="mx-2">|</span>
          <button
            :disabled="$route.path === '/id/' || $route.path === '/id'"
            :class="{
              'text-accent': $route.path === '/id/' || $route.path === '/id',
              underline: $route.path === '/id/' || $route.path === '/id',
            }"
            class="font-semibold decoration-2 hover:underline"
          >
            ID
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile and Tablet -->
    <div class="space-y-2 xl:hidden">
      <div
        class="mx-auto flex max-w-screen-xl flex-row flex-wrap items-center justify-between rounded-md border-2 border-primary bg-background p-2 shadow-xl"
      >
        <div>
          <NuxtLink to="/">
            <img
              src="/public/images/danantara-logo-black-v2.webp"
              alt="Danantara logo"
              class="w-32"
            />
          </NuxtLink>
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
          <li
            class="decoration-2 hover:text-accent hover:underline"
            @click="scrollTo('tentang')"
          >
            Tentang
          </li>
          <li
            class="decoration-2 hover:text-accent hover:underline"
            @click="scrollTo('misi')"
          >
            Visi & Misi
          </li>
          <li
            class="decoration-2 hover:text-accent hover:underline"
            @click="scrollTo('struktur')"
          >
            Struktur
          </li>
          <li
            class="decoration-2 hover:text-accent hover:underline"
            @click="scrollTo('berita')"
          >
            Berita
          </li>
          <li
            class="decoration-2 hover:text-accent hover:underline"
            @click="scrollTo('kontak')"
          >
            Kontak
          </li>
        </ul>

        <div class="h-[1px] bg-accent"></div>

        <div class="flex flex-row items-center justify-center text-sm">
          <button
            class="disabled cursor-not-allowed font-semibold decoration-2"
          >
            EN
          </button>
          <span class="mx-2">|</span>
          <button
            :disabled="$route.path === '/id/' || $route.path === '/id'"
            :class="{
              'text-accent': $route.path === '/id/' || $route.path === '/id',
              underline: $route.path === '/id/' || $route.path === '/id',
            }"
            class="font-semibold decoration-2 hover:underline"
          >
            ID
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
