import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { navbar, sidebar } from "./configs";

export default defineUserConfig({
  // set site base to default value
  base: "/",

  // extra tags in `<head>`
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/images/half.png",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-EN",
      title: "Cheatsheet",
      description: "",
    },
  },

  theme: defaultTheme({
    logo: "/images/half.png",
    repo: "sagelga/cheatsheet",
    docsRepo: "sagelga/cheatsheet",
    docsBranch: "main",

    locales: {
      "/": {
        navbar: navbar.en,
        sidebar: sidebar.en,
      },
    },
  }),

  plugins: [
    // docsearchPlugin({
    //   appId: "VIR8TV46UV",
    //   apiKey: "b4ef90b459d81c338bf1f61b2ad2ad06",
    //   indexName: "sagelga",
    // }),
    googleAnalyticsPlugin({
      id: "G-5FW65F8J63",
    }),
  ],
});
