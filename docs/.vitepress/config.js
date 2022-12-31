import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DevTalk.fun",
  titleTemplate: "The FUN place to talk dev stuff",
  lang: "en-US",
  themeConfig: {
    siteTitle: "DevTalk.fun",
    algolia: {
      appId: "",
      apiKey: "",
      indexName: "devtalk",
    },
    nav: [{ text: "Guide", link: "/guide" }],
    socialLinks: [{ icon: "github", link: "https://github.com/erondpowell" }],
    sidebar: [
      {
        text: "TypeScript",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "What's TypeScript?", link: "/ts/whats-typescript.md" },
          { text: "Basic Types", link: "/ts/basic-types" },
          { text: "The Compiler", link: "/ts/the-compiler" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/vuejs/devtalk/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released under no License. Just don't copy my stuff.",
      copyright: "Copyright © 2022-present Eron Donevan Powell",
    },
  },
});
