const CONFIG = {
  // profile setting (required)
  profile: {
    name: "4TT4",
    image: "/avatar-circle.png",
    role: "ML Developer & Music Artist",
    bio: "Sharing everything I learn about music & audio-processing",
    email: "4tt4official@gmail.com",
    linkedin: "aarush-aggarwal-iam4tart",
    github: "4TT4",
    instagram: "iam4tt4",
    twitter: "iam4tt4",
  },
  projects: [
    {
      name: `4TT4`,
      href: "https://github.com/4TT4",
    },
  ],
  // blog setting (required)
  blog: {
    title: "4TAudio Log",
    description: "Sharing everything I learn about music & audio-processing",
    theme: "light",
  },

  // CONFIG configration (required)
  link: "https://4t-audio.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
