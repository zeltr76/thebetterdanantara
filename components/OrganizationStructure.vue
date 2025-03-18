<script setup lang="ts"></script>

<template>
  <div class="mx-auto max-w-[1000px] space-y-4">
    <AtomicSectionHeading>Struktur Organisasi Danantara</AtomicSectionHeading>

    <div
      class="flex flex-col items-stretch gap-2 md:items-center xl:flex-row xl:items-stretch xl:gap-4"
    >
      <img
        src="/public/images/struktur-organisasi-danantara.webp"
        alt="Struktur organisasi Danantara"
        class="aspect-square max-w-[500px] cursor-pointer rounded-md border-2 border-accent shadow-xl"
        @click="
          navigateTo(
            'https://www.erakini.id/images/infografis/struktur-organisasi-danantara-indonesia-01_1740616419.webp',
            { open: { target: '_blank' }, external: true },
          )
        "
        loading="lazy"
      />
      <div
        class="font-roboto-serif relative aspect-square max-w-[500px] space-y-2 rounded-md bg-[url('/public/images/danantara-building-trademark.webp')] bg-cover bg-bottom p-4 text-background shadow-xl backdrop-grayscale-0 xl:bg-center"
      >
        <div class="absolute inset-0 z-[-1] rounded-md bg-black/75"></div>

        <h2 class="font-semibold uppercase drop-shadow-xl md:text-xl">
          Struktur Organisasi:
        </h2>

        <ul class="space-y-1 text-sm drop-shadow-xl md:text-xl">
          <li>Presiden Republik Indonesia: Prabowo Subianto</li>
          <li>
            Dewan Penasihat:
            <ul class="list-disc pl-4">
              <li>Joko Widodo</li>
              <li>Susilo Bambang Yudhoyono (SBY)</li>
            </ul>
          </li>
          <li>
            Dewan Pengawas:
            <ul class="list-disc pl-4">
              <li>Ketua: Erick Thohir</li>
              <li>Wakil Ketua: Muliaman D. Hadad</li>
              <li>Anggota: Sri Mulyani</li>
            </ul>
          </li>
          <li>
            Direksi:
            <ul class="list-disc pl-4">
              <li>CEO: Rosan Perkasa Roesiani</li>
              <li>COO: Dony Oskaria</li>
              <li>CIO: Pandu Sjahrir</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
