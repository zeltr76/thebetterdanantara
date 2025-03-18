// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Daya Anagata Nusantara - Danantara",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Lembaga Pengelola Investasi Daya Anagata Nusantara (DANANTARA)",
        },
        {
          name: "keywords",
          content:
            "Prabowo Subianto, Badan Pengelola Investasi, BPI, Daya Anagata Nusantara, Danantara, Badan Investasi",
        },
        {
          property: "og:image",
          content: "/images/hero-children-indo.webp",
        },
        {
          property: "og:title",
          content: "Daya Anagata Nusantara - Danantara",
        },
        {
          property: "og:url",
          content: "https://thebetterdanantara.vercel.app/",
        },
        {
          property: "og:description",
          content:
            "Lembaga Pengelola Investasi Daya Anagata Nusantara (DANANTARA)",
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:site_name",
          content: "Daya Anagata Nusantara - Danantara",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Daya Anagata Nusantara - Danantara",
        },
        {
          name: "twitter:description",
          content:
            "Lembaga Pengelola Investasi Daya Anagata Nusantara (DANANTARA)",
        },
        {
          name: "twitter:image",
          content: "/images/hero-children-indo.webp",
        },
      ],
    },
  },

  modules: ["@nuxt/fonts"],

  css: ["~/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  fonts: {
    provider: "google",
  },
})
