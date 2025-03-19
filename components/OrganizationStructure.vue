<script setup lang="ts"></script>

<template>
  <div class="mx-auto max-w-[1000px] space-y-4">
    <AtomicSectionHeading>Struktur Danantara</AtomicSectionHeading>

    <div
      class="flex flex-col items-stretch gap-2 md:items-center md:gap-4 xl:flex-row xl:items-stretch"
    >
      <img
        src="/images/struktur-organisasi-danantara.webp"
        alt="Struktur Organisasi Danantara"
        class="max-w-[500px] cursor-pointer rounded-md border-2 border-accent shadow-xl"
        @click="
          navigateTo(
            'https://www.erakini.id/images/infografis/struktur-organisasi-danantara-indonesia-01_1740616419.webp',
            { open: { target: '_blank' }, external: true },
          )
        "
        loading="lazy"
      />
      <!-- I hate the style of this -->
      <div
        class="relative w-full max-w-[500px] space-y-2 rounded-md bg-[url('/images/danantara-building-trademark.webp')] bg-cover bg-bottom p-4 font-roboto-serif text-background shadow-xl xl:bg-center"
      >
        <div class="absolute inset-0 rounded-md bg-black/70"></div>

        <div class="flex items-center justify-center">
          <h2 class="font-semibold uppercase drop-shadow-xl md:text-xl">
            Struktur Organisasi:
          </h2>

          <ul class="space-y-2 text-sm drop-shadow-xl md:text-xl">
            <li>
              Presiden Republik Indonesia: <br />
              Prabowo Subianto
            </li>
            <li>
              Dewan Penasihat:
              <ul>
                <li>Joko Widodo</li>
                <li>Susilo Bambang Yudhoyono (SBY)</li>
              </ul>
            </li>
            <li>
              Dewan Pengawas:
              <ul>
                <li>Ketua: Erick Thohir</li>
                <li>Wakil Ketua: Muliaman D. Hadad</li>
                <li>Anggota: Sri Mulyani</li>
              </ul>
            </li>
            <li>
              Direksi:
              <ul>
                <li>CEO: Rosan Perkasa Roesiani</li>
                <li>COO: Dony Oskaria</li>
                <li>CIO: Pandu Sjahrir</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
